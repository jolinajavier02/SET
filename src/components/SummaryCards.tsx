import React from 'react';
import { TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { formatCurrency } from '../utils';

interface SummaryCardsProps {
  balance: number;
  totalIncome: number;
  totalExpense: number;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({
  balance,
  totalIncome,
  totalExpense,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Balance Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Balance</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              {formatCurrency(balance)}
            </p>
          </div>
          <Wallet className="text-primary" size={40} />
        </div>
      </div>

      {/* Income Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-income">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Income</p>
            <p className="text-3xl font-bold text-income mt-2">
              {formatCurrency(totalIncome)}
            </p>
          </div>
          <TrendingUp className="text-income" size={40} />
        </div>
      </div>

      {/* Expense Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-expense">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-600 text-sm font-medium">Total Expenses</p>
            <p className="text-3xl font-bold text-expense mt-2">
              {formatCurrency(totalExpense)}
            </p>
          </div>
          <TrendingDown className="text-expense" size={40} />
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
