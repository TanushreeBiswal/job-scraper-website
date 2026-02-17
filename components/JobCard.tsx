import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  // Strip common markdown characters for the preview
  const content = job.website_content?.markdown_content || '';
  const previewText = content
    ? content.replace(/[#*`_\[\]]/g, '').trim().slice(0, 120)
    : '';

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
            {job.type || 'Job'}
          </span>
          <span className="text-xs text-gray-400 flex items-center">
            <Calendar size={12} className="mr-1" />
            {job.date}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{job.website_content.title}</h3>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{job.location || 'Remote'}</span>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
          {previewText}...
        </p>
      </div>

      <div className="bg-gray-50 p-4 border-t border-gray-100">
        <Link
          to={`/job/${job.id}`}
          className="w-full flex items-center justify-center bg-white border border-gray-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 text-slate-700 font-medium py-2 px-4 rounded-lg transition-all duration-200 group"
        >
          View Details
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;