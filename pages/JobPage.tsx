import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, MapPin, Share2 } from 'lucide-react';
import { getJobById } from '../services/jobService';
import { Job } from '../types';
import AdBanner from '../components/AdBanner';
import SocialLinks from '../components/SocialLinks';

const JobPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const loadJob = async () => {
      try {
        const data = await getJobById(id);
        setJob(data || null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadJob();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Not Found</h2>
        <p className="text-gray-500 mb-6">The job you are looking for might have been removed or expired.</p>
        <Link to="/" className="text-blue-600 hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb / Back */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Jobs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Main Job Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Job Header */}
              <div className="bg-slate-900 p-8 text-white">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-white bg-blue-600 rounded-full">
                  {job.type || 'Full-time'}
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">{job.website_content.title}</h1>
                <div className="flex flex-wrap gap-4 text-slate-300 text-sm">
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1.5" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1.5" />
                    Posted on {job.date}
                  </div>
                </div>
              </div>

              {/* Markdown Body */}
              <div className="p-8">
                {/* Added [&>h1]:hidden to hide the first H1 if the markdown includes the title again */}
                <article className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-700 [&>h1]:hidden">
                  <ReactMarkdown>{job.website_content.markdown_content}</ReactMarkdown>
                </article>

                <div className="mt-10 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this opportunity</h3>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      <Share2 size={20} />
                    </button>
                    {/* Add specific share buttons if needed, usually generic share or copy link is good */}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <AdBanner className="rounded-xl overflow-hidden shadow-sm" slot="job-bottom" />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
              <a
                href={job.website_content.actual_link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-blue-200 mb-3 block text-center"
              >
                {job.website_content.action || 'Apply Now'}
              </a>
              <p className="text-xs text-center text-gray-500">
                You will be redirected to the application form.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Advertisement</h3>
              <AdBanner format="vertical" slot="job-sidebar" />
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Follow Us</h3>
              <SocialLinks />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default JobPage;