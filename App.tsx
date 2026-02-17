import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job/:id" element={<JobPage />} />
        </Routes>
        
        <footer className="bg-white border-t border-gray-200 mt-auto py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} DailyJobs. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;