export type TransactionType = 'income' | 'expense';

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  type: TransactionType;
}

export interface Transaction {
  id: string;
  amount: number;
  date: string;
  categoryId: string;
  type: TransactionType;
  note?: string;
}

export interface Appointment {
  id: string;
  title: string;
  date: string;
  amount?: number;
  type: 'bill' | 'reminder' | 'personal';
  completed: boolean;
}

export interface UserSettings {
  initialBalance: number;
  lowBalanceThreshold: number;
  currency: string;
  language: 'fr' | 'ar';
  fullName?: string;
  username?: string;
  email?: string;
  password?: string;
  appName?: string;
  appLogo?: string;
}
