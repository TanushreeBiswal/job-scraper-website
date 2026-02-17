import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-slate-200">404</h1>
                <h2 className="text-3xl font-bold text-slate-900 mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-2 mb-8">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    <Home className="mr-2" size={20} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
