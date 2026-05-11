-- ============================================================================
-- PERSONAL WALLET APPLICATION - COMPLETE DATABASE SCHEMA
-- Generated for Supabase PostgreSQL
-- ============================================================================

-- ============================================================================
-- 1. AUTHENTICATION & PROFILES TABLE
-- ============================================================================
-- This table extends Supabase Auth with additional profile information
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name VARCHAR(255),
  username VARCHAR(100) UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- ============================================================================
-- 2. CATEGORIES TABLE
-- ============================================================================
-- Supports both default and user-created categories
-- Categories can be for income or expense
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  icon VARCHAR(50) DEFAULT 'Wallet',
  color VARCHAR(7) DEFAULT '#3b82f6',
  type VARCHAR(20) NOT NULL CHECK (type IN ('income', 'expense')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_categories_user_id ON public.categories(user_id);
CREATE INDEX IF NOT EXISTS idx_categories_type ON public.categories(type);

-- Enable RLS on categories
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for categories
CREATE POLICY "Users can view default and own categories" ON public.categories
  FOR SELECT USING (user_id IS NULL OR auth.uid() = user_id);

CREATE POLICY "Users can create own categories" ON public.categories
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own categories" ON public.categories
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own categories" ON public.categories
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================================================
-- 3. TRANSACTIONS TABLE
-- ============================================================================
-- Stores all income and expense transactions
-- Linked to categories and users
CREATE TABLE IF NOT EXISTS public.transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES public.categories(id) ON DELETE SET NULL,
  amount DECIMAL(15, 2) NOT NULL,
  type VARCHAR(20) NOT NULL CHECK (type IN ('income', 'expense')),
  date DATE NOT NULL,
  note TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON public.transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_transactions_category_id ON public.transactions(category_id);
CREATE INDEX IF NOT EXISTS idx_transactions_date ON public.transactions(date);
CREATE INDEX IF NOT EXISTS idx_transactions_type ON public.transactions(type);
CREATE INDEX IF NOT EXISTS idx_transactions_user_date ON public.transactions(user_id, date DESC);

-- Enable RLS on transactions
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for transactions
CREATE POLICY "Users can view own transactions" ON public.transactions
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own transactions" ON public.transactions
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own transactions" ON public.transactions
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own transactions" ON public.transactions
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================================================
-- 4. APPOINTMENTS TABLE
-- ============================================================================
-- Stores reminders, bills, and personal appointments
-- Can track amount for bills
CREATE TABLE IF NOT EXISTS public.appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  amount DECIMAL(15, 2),
  type VARCHAR(20) NOT NULL DEFAULT 'bill' CHECK (type IN ('bill', 'reminder', 'personal')),
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_appointments_user_id ON public.appointments(user_id);
CREATE INDEX IF NOT EXISTS idx_appointments_date ON public.appointments(date);
CREATE INDEX IF NOT EXISTS idx_appointments_type ON public.appointments(type);
CREATE INDEX IF NOT EXISTS idx_appointments_completed ON public.appointments(completed);
CREATE INDEX IF NOT EXISTS idx_appointments_user_date ON public.appointments(user_id, date ASC);

-- Enable RLS on appointments
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for appointments
CREATE POLICY "Users can view own appointments" ON public.appointments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own appointments" ON public.appointments
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own appointments" ON public.appointments
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own appointments" ON public.appointments
  FOR DELETE USING (auth.uid() = user_id);

-- ============================================================================
-- 5. USER SETTINGS TABLE
-- ============================================================================
-- Stores user preferences and application settings
-- Includes branding, currency, language, and balance information
CREATE TABLE IF NOT EXISTS public.user_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  initial_balance DECIMAL(15, 2) DEFAULT 0,
  low_balance_threshold DECIMAL(15, 2) DEFAULT 1000,
  currency VARCHAR(3) DEFAULT 'DZD',
  language VARCHAR(2) DEFAULT 'fr' CHECK (language IN ('fr', 'ar')),
  full_name VARCHAR(255),
  username VARCHAR(100),
  email VARCHAR(255),
  app_name VARCHAR(100) DEFAULT 'FinTrack',
  app_logo VARCHAR(50) DEFAULT 'Wallet',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for user_id lookup
CREATE INDEX IF NOT EXISTS idx_user_settings_user_id ON public.user_settings(user_id);

-- Enable RLS on user_settings
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for user_settings
CREATE POLICY "Users can view own settings" ON public.user_settings
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own settings" ON public.user_settings
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own settings" ON public.user_settings
  FOR UPDATE USING (auth.uid() = user_id);

-- ============================================================================
-- 6. AUDIT LOG TABLE (Optional but Recommended)
-- ============================================================================
-- Tracks all changes to financial data for security and debugging
CREATE TABLE IF NOT EXISTS public.audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  table_name VARCHAR(50),
  record_id UUID,
  action VARCHAR(20) CHECK (action IN ('INSERT', 'UPDATE', 'DELETE')),
  old_data JSONB,
  new_data JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for audit logs
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON public.audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at DESC);

-- Enable RLS on audit_logs
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- Create RLS policy for audit logs (users can only view their own)
CREATE POLICY "Users can view own audit logs" ON public.audit_logs
  FOR SELECT USING (auth.uid() = user_id);

-- ============================================================================
-- 7. TRIGGERS FOR AUTOMATIC TIMESTAMP UPDATES
-- ============================================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for profiles table
CREATE TRIGGER trigger_update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for categories table
CREATE TRIGGER trigger_update_categories_updated_at
  BEFORE UPDATE ON public.categories
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for transactions table
CREATE TRIGGER trigger_update_transactions_updated_at
  BEFORE UPDATE ON public.transactions
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for appointments table
CREATE TRIGGER trigger_update_appointments_updated_at
  BEFORE UPDATE ON public.appointments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for user_settings table
CREATE TRIGGER trigger_update_user_settings_updated_at
  BEFORE UPDATE ON public.user_settings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- 8. INITIAL DEFAULT CATEGORIES
-- ============================================================================
-- These categories are available to all users (user_id IS NULL)

-- INCOME CATEGORIES
INSERT INTO public.categories (name, icon, color, type, user_id) 
VALUES 
  ('Salary', '💼', '#10b981', 'income', NULL),
  ('Freelance', '🖥️', '#3b82f6', 'income', NULL),
  ('Business', '🏢', '#8b5cf6', 'income', NULL),
  ('Investment', '📈', '#f59e0b', 'income', NULL),
  ('Bonus', '🎁', '#ec4899', 'income', NULL)
ON CONFLICT DO NOTHING;

-- EXPENSE CATEGORIES
INSERT INTO public.categories (name, icon, color, type, user_id) 
VALUES 
  ('Groceries', '🛒', '#10b981', 'expense', NULL),
  ('Utilities', '💡', '#f59e0b', 'expense', NULL),
  ('Transportation', '🚗', '#3b82f6', 'expense', NULL),
  ('Entertainment', '🎮', '#8b5cf6', 'expense', NULL),
  ('Dining', '🍕', '#ec4899', 'expense', NULL),
  ('Shopping', '🛍️', '#06b6d4', 'expense', NULL),
  ('Healthcare', '🏥', '#ef4444', 'expense', NULL),
  ('Education', '📚', '#6366f1', 'expense', NULL),
  ('Fitness', '💪', '#14b8a6', 'expense', NULL),
  ('Travel', '✈️', '#f97316', 'expense', NULL),
  ('Subscription', '📺', '#8b5cf6', 'expense', NULL),
  ('Insurance', '🛡️', '#6b7280', 'expense', NULL),
  ('Rent', '🏠', '#1f2937', 'expense', NULL),
  ('Maintenance', '🔧', '#6b7280', 'expense', NULL),
  ('Phone', '📱', '#3b82f6', 'expense', NULL),
  ('Internet', '📡', '#06b6d4', 'expense', NULL),
  ('Clothing', '👕', '#ec4899', 'expense', NULL),
  ('Shoes', '👟', '#f97316', 'expense', NULL),
  ('Beauty', '💄', '#db2777', 'expense', NULL),
  ('Books', '📖', '#6366f1', 'expense', NULL),
  ('Coffee', '☕', '#b45309', 'expense', NULL),
  ('Gifts', '🎀', '#be123c', 'expense', NULL),
  ('Party', '🎉', '#d946ef', 'expense', NULL),
  ('Pet', '🐾', '#92400e', 'expense', NULL),
  ('Taxi', '🚕', '#fbbf24', 'expense', NULL),
  ('Movies', '🎬', '#7c3aed', 'expense', NULL),
  ('Music', '🎵', '#06b6d4', 'expense', NULL),
  ('Sports', '⚽', '#10b981', 'expense', NULL),
  ('Gym', '🏋️', '#059669', 'expense', NULL)
ON CONFLICT DO NOTHING;

-- ============================================================================
-- 9. HELPFUL VIEWS FOR ANALYTICS
-- ============================================================================

-- View for monthly income summary by category
CREATE OR REPLACE VIEW public.monthly_income_summary AS
SELECT 
  t.user_id,
  DATE_TRUNC('month', t.date)::DATE as month,
  t.category_id,
  c.name as category_name,
  c.icon,
  SUM(t.amount) as total_amount,
  COUNT(*) as transaction_count
FROM public.transactions t
LEFT JOIN public.categories c ON t.category_id = c.id
WHERE t.type = 'income'
GROUP BY t.user_id, DATE_TRUNC('month', t.date), t.category_id, c.name, c.icon;

-- View for monthly expense summary by category
CREATE OR REPLACE VIEW public.monthly_expense_summary AS
SELECT 
  t.user_id,
  DATE_TRUNC('month', t.date)::DATE as month,
  t.category_id,
  c.name as category_name,
  c.icon,
  SUM(t.amount) as total_amount,
  COUNT(*) as transaction_count
FROM public.transactions t
LEFT JOIN public.categories c ON t.category_id = c.id
WHERE t.type = 'expense'
GROUP BY t.user_id, DATE_TRUNC('month', t.date), t.category_id, c.name, c.icon;

-- View for daily balance calculation
CREATE OR REPLACE VIEW public.daily_balance AS
SELECT 
  t.user_id,
  t.date,
  SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE -t.amount END) as daily_change,
  SUM(SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE -t.amount END)) 
    OVER (PARTITION BY t.user_id ORDER BY t.date) as cumulative_balance
FROM public.transactions t
GROUP BY t.user_id, t.date;

-- View for pending appointments
CREATE OR REPLACE VIEW public.pending_appointments AS
SELECT 
  id,
  user_id,
  title,
  date,
  amount,
  type,
  completed,
  created_at
FROM public.appointments
WHERE completed = FALSE
ORDER BY date ASC;

-- ============================================================================
-- 10. STORED PROCEDURES FOR COMMON OPERATIONS
-- ============================================================================

-- Procedure to get total balance for a user
CREATE OR REPLACE FUNCTION get_user_balance(p_user_id UUID)
RETURNS TABLE (balance DECIMAL) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(us.initial_balance, 0) + 
    COALESCE(SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE -t.amount END), 0)
  FROM public.user_settings us
  LEFT JOIN public.transactions t ON us.user_id = t.user_id
  WHERE us.user_id = p_user_id
  GROUP BY us.user_id, us.initial_balance;
END;
$$ LANGUAGE plpgsql;

-- Procedure to get monthly summary for a user
CREATE OR REPLACE FUNCTION get_monthly_summary(p_user_id UUID, p_year INT, p_month INT)
RETURNS TABLE (
  income_total DECIMAL,
  expense_total DECIMAL,
  net_total DECIMAL,
  transaction_count INT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE 0 END) as income_total,
    SUM(CASE WHEN t.type = 'expense' THEN t.amount ELSE 0 END) as expense_total,
    SUM(CASE WHEN t.type = 'income' THEN t.amount ELSE -t.amount END) as net_total,
    COUNT(*) as transaction_count
  FROM public.transactions t
  WHERE t.user_id = p_user_id
    AND EXTRACT(YEAR FROM t.date) = p_year
    AND EXTRACT(MONTH FROM t.date) = p_month;
END;
$$ LANGUAGE plpgsql;

-- ============================================================================
-- SUMMARY OF DATA STRUCTURES
-- ============================================================================
/*
TABLES CREATED:

1. profiles
   - id (UUID, PK)
   - full_name (VARCHAR)
   - username (VARCHAR, UNIQUE)
   - created_at (TIMESTAMP)
   - updated_at (TIMESTAMP)

2. categories
   - id (UUID, PK)
   - user_id (UUID, FK to auth.users)
   - name (VARCHAR)
   - icon (VARCHAR)
   - color (VARCHAR)
   - type (VARCHAR: 'income' or 'expense')
   - created_at (TIMESTAMP)
   - updated_at (TIMESTAMP)

3. transactions
   - id (UUID, PK)
   - user_id (UUID, FK to auth.users)
   - category_id (UUID, FK to categories)
   - amount (DECIMAL)
   - type (VARCHAR: 'income' or 'expense')
   - date (DATE)
   - note (TEXT)
   - created_at (TIMESTAMP)
   - updated_at (TIMESTAMP)

4. appointments
   - id (UUID, PK)
   - user_id (UUID, FK to auth.users)
   - title (VARCHAR)
   - date (DATE)
   - amount (DECIMAL, nullable)
   - type (VARCHAR: 'bill', 'reminder', 'personal')
   - completed (BOOLEAN)
   - created_at (TIMESTAMP)
   - updated_at (TIMESTAMP)

5. user_settings
   - id (UUID, PK)
   - user_id (UUID, FK to auth.users, UNIQUE)
   - initial_balance (DECIMAL)
   - low_balance_threshold (DECIMAL)
   - currency (VARCHAR, default 'DZD')
   - language (VARCHAR: 'fr' or 'ar')
   - full_name (VARCHAR)
   - username (VARCHAR)
   - email (VARCHAR)
   - app_name (VARCHAR)
   - app_logo (VARCHAR)
   - created_at (TIMESTAMP)
   - updated_at (TIMESTAMP)

6. audit_logs
   - id (UUID, PK)
   - user_id (UUID, FK to auth.users)
   - table_name (VARCHAR)
   - record_id (UUID)
   - action (VARCHAR: 'INSERT', 'UPDATE', 'DELETE')
   - old_data (JSONB)
   - new_data (JSONB)
   - created_at (TIMESTAMP)

SECURITY:
- All tables have Row Level Security (RLS) enabled
- Users can only access their own data
- Foreign keys ensure referential integrity
- Indexes on frequently queried columns for performance

RELATIONSHIPS:
- profiles → auth.users (1:1)
- categories → auth.users (1:N, nullable for default categories)
- transactions → auth.users (1:N)
- transactions → categories (N:1)
- appointments → auth.users (1:N)
- user_settings → auth.users (1:1)
- audit_logs → auth.users (1:N)
*/
