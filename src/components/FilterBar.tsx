import React from 'react';
import { Filter } from 'lucide-react';
import { CATEGORIES } from '../utils';

interface FilterBarProps {
  category: string;
  type: 'all' | 'income' | 'expense';
  dateFrom: string;
  dateTo: string;
  onCategoryChange: (category: string) => void;
  onTypeChange: (type: 'all' | 'income' | 'expense') => void;
  onDateFromChange: (date: string) => void;
  onDateToChange: (date: string) => void;
  onReset: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  category,
  type,
  dateFrom,
  dateTo,
  onCategoryChange,
  onTypeChange,
  onDateFromChange,
  onDateToChange,
  onReset,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center gap-2 mb-4">
        <Filter size={20} className="text-primary" />
        <h3 className="font-semibold text-gray-900">Filters</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Type
          </label>
          <select
            value={type}
            onChange={(e) =>
              onTypeChange(e.target.value as 'all' | 'income' | 'expense')
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Date From */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From Date
          </label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => onDateFromChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        {/* Date To */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            To Date
          </label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => onDateToChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
          />
        </div>

        {/* Reset Button */}
        <div className="flex items-end">
          <button
            onClick={onReset}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-900 font-medium py-2 px-4 rounded-lg transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
