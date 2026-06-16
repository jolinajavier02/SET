export type TransactionType = 'income' | 'expense';

export interface Transaction {
  id: string;
  type: TransactionType;
  title: string;
  amount: number;
  category: string;
  date: string;
  note: string;
}

export interface TransactionFormValues {
  type: TransactionType;
  title: string;
  amount: string;
  category: string;
  date: string;
  note: string;
}

export interface FilterState {
  category: string;
  dateFrom: string;
  dateTo: string;
  type: 'all' | 'income' | 'expense';
}
