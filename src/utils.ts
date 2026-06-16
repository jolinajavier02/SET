import { Transaction } from './types';

export const CATEGORIES = [
  'Food',
  'Transport',
  'Bills',
  'Shopping',
  'Health',
  'Salary',
  'Freelance',
  'Entertainment',
];

export const calculateTotalIncome = (transactions: Transaction[]): number => {
  return transactions
    .filter((t) => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);
};

export const calculateTotalExpense = (transactions: Transaction[]): number => {
  return transactions
    .filter((t) => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);
};

export const calculateBalance = (transactions: Transaction[]): number => {
  return calculateTotalIncome(transactions) - calculateTotalExpense(transactions);
};

export const filterTransactions = (
  transactions: Transaction[],
  searchTerm: string,
  categoryFilter: string,
  typeFilter: 'all' | 'income' | 'expense',
  dateFrom: string,
  dateTo: string
): Transaction[] => {
  return transactions.filter((t) => {
    const matchesSearch =
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.note.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === '' || t.category === categoryFilter;

    const matchesType = typeFilter === 'all' || t.type === typeFilter;

    const transactionDate = new Date(t.date).getTime();
    const matchesDateFrom = dateFrom === '' || transactionDate >= new Date(dateFrom).getTime();
    const matchesDateTo =
      dateTo === '' || transactionDate <= new Date(dateTo).getTime();

    return (
      matchesSearch &&
      matchesCategory &&
      matchesType &&
      matchesDateFrom &&
      matchesDateTo
    );
  });
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const getMonthlySummary = (transactions: Transaction[]): Record<string, { income: number; expense: number }> => {
  const summary: Record<string, { income: number; expense: number }> = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

    if (!summary[monthKey]) {
      summary[monthKey] = { income: 0, expense: 0 };
    }

    if (t.type === 'income') {
      summary[monthKey].income += t.amount;
    } else {
      summary[monthKey].expense += t.amount;
    }
  });

  return summary;
};

export const getCategoryBreakdown = (transactions: Transaction[]): Record<string, number> => {
  const breakdown: Record<string, number> = {};

  transactions.forEach((t) => {
    if (!breakdown[t.category]) {
      breakdown[t.category] = 0;
    }
    breakdown[t.category] += t.amount;
  });

  return breakdown;
};
