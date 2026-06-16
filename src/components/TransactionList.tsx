import React from 'react';
import { Transaction } from '../types';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
  onDelete: (id: string) => void;
  onEdit: (transaction: Transaction) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({
  transactions,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TransactionList;
