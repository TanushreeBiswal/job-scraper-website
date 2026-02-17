import React from 'react';

const TermsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h1>Terms of Service</h1>
                <p>Last updated: {new Date().toLocaleDateString()}</p>

                <h2>1. Agreement to Terms</h2>
                <p>
                    By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                </p>

                <h2>2. Use License</h2>
                <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on DailyJobs' website for personal, non-commercial transitory viewing only.
                </p>

                <h2>3. Disclaimer</h2>
                <p>
                    The materials on DailyJobs' website are provided on an 'as is' basis. DailyJobs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>

                <h2>4. Limitations</h2>
                <p>
                    In no event shall DailyJobs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DailyJobs' website.
                </p>

                <h2>5. Accuracy of Materials</h2>
                <p>
                    The materials appearing on DailyJobs' website could include technical, typographical, or photographic errors. DailyJobs does not warrant that any of the materials on its website are accurate, complete or current.
                </p>

                <h2>6. Links</h2>
                <p>
                    DailyJobs has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DailyJobs of the site. Use of any such linked website is at the user's own risk.
                </p>

                <h2>7. Modifications</h2>
                <p>
                    DailyJobs may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
            </div>
        </div>
    );
};

export default TermsPage;
