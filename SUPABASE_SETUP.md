# Supabase Configuration Guide

## Important Setup Steps

After connecting to your Supabase project, please follow these steps to ensure proper authentication:

### 1. Email Authentication Settings
Go to your Supabase Dashboard → Authentication → Providers → Email:
- **Enable Email Provider** (if not already enabled)
- **Disable "Confirm email"** option - This allows users to sign up and login immediately without email verification
  - Navigate to: Authentication → Settings → Email Templates
  - Look for "Disable email confirmation" or similar toggle
  - OR in Authentication → Settings → Email Auth → Enable "Confirm email before signing in" should be DISABLED

### 2. Create Trigger for Profile Creation
Run this SQL in your Supabase SQL Editor to automatically create a profile when a user signs up:

```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, username, created_at, updated_at)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'username',
    NOW(),
    NOW()
  )
  ON CONFLICT (id) DO NOTHING;
  
  INSERT INTO public.user_settings (user_id, full_name, username, email, created_at, updated_at)
  VALUES (
    NEW.id,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'username',
    NEW.email,
    NOW(),
    NOW()
  )
  ON CONFLICT (user_id) DO NOTHING;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create new trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

### 3. Row Level Security (RLS) Policies
The database schema includes RLS policies. Make sure they're enabled on all tables:
- profiles
- categories  
- transactions
- appointments
- user_settings
- audit_logs

### 4. Testing the Application

1. **Sign Up:**
   - Go to the login page
   - Click "S'inscrire" (Register)
   - Fill in Full Name, Email, and Password
   - Click "S'inscrire"
   - Account should be created and you should be automatically logged in

2. **Login:**
   - Use the email and password you just created
   - Click "Se connecter"
   - You should be logged in successfully

3. **Troubleshooting:**
   - If you get a "400 Bad Request" error:
     - Make sure email is not already registered
     - Check that password is at least 6 characters
     - Verify your Supabase credentials in .env.local are correct
   - If profile doesn't appear:
     - Run the trigger creation SQL above
     - Check that the profiles table has proper RLS policies

### 5. Default Categories
The application includes 30 pre-loaded default categories for both income and expenses. These are automatically available to all users.

### 6. Currency & Language Settings
- Default Currency: DZD (Algerian Dinar)
- Default Language: Français (French)
- Users can change these in Settings

## API Endpoints Used

All data is stored in Supabase PostgreSQL with the following tables:
- `profiles` - User profile information
- `categories` - Transaction categories
- `transactions` - Income and expense transactions
- `appointments` - Reminders, bills, and personal appointments
- `user_settings` - User preferences and app configuration
- `audit_logs` - Change tracking (optional)

For detailed schema information, see `DATABASE_SCHEMA.sql`
