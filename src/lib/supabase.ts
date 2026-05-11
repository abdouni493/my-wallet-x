import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    'Missing Supabase credentials. Ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in:',
    '- .env.local (for local development)',
    '- Vercel Environment Variables (for production)'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://loyibfnyaugodnjppjhs.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxveWliZm55YXVnb2RuanBwamhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5NDUwMzUsImV4cCI6MjA5MTUyMTAzNX0.fKpS6VsScS9LDTSAIdMHTbjUG6NXX3HHWA7Evnu-N3s'
);
