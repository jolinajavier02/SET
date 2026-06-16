import React, { useState, useEffect } from 'react';
import {
  Header,
  SummaryCards,
  TransactionForm,
  TransactionList,
  SearchBar,
  FilterBar,
  EmptyState,
} from '../components';
import { Transaction } from '../types';
import {
  calculateBalance,
  calculateTotalIncome,
  calculateTotalExpense,
  filterTransactions,
} from '../utils';

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'income',
      title: 'Monthly Salary',
      amount: 3000,
      category: 'Salary',
      date: '2024-01-01',
      note: 'January salary',
    },
    {
      id: '2',
      type: 'expense',
      title: 'Groceries',
      amount: 150,
      category: 'Food',
      date: '2024-01-02',
      note: 'Weekly groceries',
    },
    {
      id: '3',
      type: 'expense',
      title: 'Gas',
      amount: 50,
      category: 'Transport',
      date: '2024-01-03',
      note: 'Weekly fuel',
    },
    {
      id: '4',
      type: 'expense',
      title: 'Restaurant',
      amount: 75,
      category: 'Food',
      date: '2024-01-04',
      note: 'Dinner with friends',
    },
    {
      id: '5',
      type: 'income',
      title: 'Freelance Project',
      amount: 500,
      category: 'Freelance',
      date: '2024-01-05',
      note: 'Web design project',
    },
    {
      id: '6',
      type: 'expense',
      title: 'Electricity Bill',
      amount: 120,
      category: 'Bills',
      date: '2024-01-06',
      note: 'Monthly electricity',
    },
    {
      id: '7',
      type: 'expense',
      title: 'Medical Checkup',
      amount: 200,
      category: 'Health',
      date: '2024-01-07',
      note: 'Annual checkup',
    },
    {
      id: '8',
      type: 'expense',
      title: 'Movie Tickets',
      amount: 30,
      category: 'Entertainment',
      date: '2024-01-08',
      note: 'Cinema with family',
    },
    {
      id: '9',
      type: 'expense',
      title: 'New Shoes',
      amount: 120,
      category: 'Shopping',
      date: '2024-01-09',
      note: 'Athletic shoes',
    },
    {
      id: '10',
      type: 'expense',
      title: 'Internet Bill',
      amount: 60,
      category: 'Bills',
      date: '2024-01-10',
      note: 'Monthly internet',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState<'all' | 'income' | 'expense'>(
    'all'
  );
  const [dateFrom, setDateFrom] = useState('');
  const [dateTo, setDateTo] = useState('');
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const filteredTransactions = filterTransactions(
    transactions,
    searchTerm,
    categoryFilter,
    typeFilter,
    dateFrom,
    dateTo
  );

  const balance = calculateBalance(transactions);
  const totalIncome = calculateTotalIncome(transactions);
  const totalExpense = calculateTotalExpense(transactions);

  const handleAddTransaction = (
    transaction: Omit<Transaction, 'id'>
  ) => {
    if (editingTransaction) {
      setTransactions((prev) =>
        prev.map((t) =>
          t.id === editingTransaction.id
            ? { ...transaction, id: editingTransaction.id }
            : t
        )
      );
      setEditingTransaction(null);
    } else {
      const newTransaction: Transaction = {
        ...transaction,
        id: Date.now().toString(),
      };
      setTransactions((prev) => [newTransaction, ...prev]);
    }
  };

  const handleDeleteTransaction = (id: string) => {
    if (window.confirm('Are you sure you want to delete this transaction?')) {
      setTransactions((prev) => prev.filter((t) => t.id !== id));
    }
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setCategoryFilter('');
    setTypeFilter('all');
    setDateFrom('');
    setDateTo('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title="Smart Expense Tracker" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <section className="mb-12">
          <SummaryCards
            balance={balance}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />
        </section>

        {/* Add Transaction Form */}
        <section className="mb-8">
          <TransactionForm
            onSubmit={handleAddTransaction}
            initialValues={editingTransaction || undefined}
          />
        </section>

        {/* Search and Filter */}
        <section className="mb-8 space-y-4">
          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search by title or note..."
          />

          <FilterBar
            category={categoryFilter}
            type={typeFilter}
            dateFrom={dateFrom}
            dateTo={dateTo}
            onCategoryChange={setCategoryFilter}
            onTypeChange={setTypeFilter}
            onDateFromChange={setDateFrom}
            onDateToChange={setDateTo}
            onReset={handleResetFilters}
          />
        </section>

        {/* Transactions List */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Transactions
          </h2>
          {filteredTransactions.length > 0 ? (
            <TransactionList
              transactions={filteredTransactions}
              onDelete={handleDeleteTransaction}
              onEdit={handleEditTransaction}
            />
          ) : (
            <EmptyState
              title="No transactions found"
              message={
                transactions.length === 0
                  ? "You haven't added any transactions yet. Start by adding your first transaction!"
                  : 'No transactions match your current filters. Try adjusting your search criteria.'
              }
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
