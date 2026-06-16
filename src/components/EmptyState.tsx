import React from 'react';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  title?: string;
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = 'No transactions found',
  message = 'Start by adding your first transaction to get started!',
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-md">
      <Inbox className="text-gray-400 mb-4" size={48} />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center max-w-md">{message}</p>
    </div>
  );
};

export default EmptyState;
