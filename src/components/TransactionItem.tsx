import React from 'react';
import { Trash2, Edit2 } from 'lucide-react';
import { Transaction } from '../types';
import { formatCurrency, formatDate } from '../utils';

interface TransactionItemProps {
  transaction: Transaction;
  onDelete: (id: string) => void;
  onEdit: (transaction: Transaction) => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-lg shadow-sm border-l-4 hover:shadow-md transition"
      style={{
        borderColor: transaction.type === 'income' ? '#10b981' : '#ef4444',
      }}
    >
      <div className="flex-1 mb-3 sm:mb-0">
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor:
                transaction.type === 'income' ? '#10b981' : '#ef4444',
            }}
          />
          <div>
            <h3 className="font-semibold text-gray-900">{transaction.title}</h3>
            <p className="text-sm text-gray-500">
              {transaction.category} • {formatDate(transaction.date)}
            </p>
            {transaction.note && (
              <p className="text-xs text-gray-600 mt-1">{transaction.note}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end gap-4">
        <div className="text-right">
          <p
            className="text-lg font-bold"
            style={{
              color: transaction.type === 'income' ? '#10b981' : '#ef4444',
            }}
          >
            {transaction.type === 'income' ? '+' : '-'}
            {formatCurrency(transaction.amount)}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onEdit(transaction)}
            className="text-primary hover:bg-blue-100 p-2 rounded-lg transition"
            aria-label="Edit"
          >
            <Edit2 size={18} />
          </button>
          <button
            onClick={() => onDelete(transaction.id)}
            className="text-expense hover:bg-red-100 p-2 rounded-lg transition"
            aria-label="Delete"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
