import React from 'react';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title = 'Smart Expense Tracker' }) => {
  return (
    <header className="bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3">
          <Wallet size={32} />
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <p className="text-blue-100 mt-2">Track your income and expenses with ease</p>
      </div>
    </header>
  );
};

export default Header;
