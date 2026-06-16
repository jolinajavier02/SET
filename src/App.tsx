import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import './App.css';

const App: React.FC = () => {
  return (
    <HashRouter>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="flex items-center gap-2 text-primary font-bold text-xl hover:text-blue-600"
            >
              <BarChart3 size={24} />
              Walletly
            </Link>
            <div className="flex gap-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary font-medium transition"
              >
                Dashboard
              </Link>
              <Link
                to="/analytics"
                className="text-gray-700 hover:text-primary font-medium transition"
              >
                Analytics
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
