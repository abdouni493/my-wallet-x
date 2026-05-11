# Vercel Deployment Setup

## Environment Variables Required for Vercel

To deploy this application successfully on Vercel, you need to configure the following environment variables:

### 1. **Supabase Configuration**
Set these in your Vercel project settings under "Environment Variables":

- `VITE_SUPABASE_URL` - Your Supabase project URL
  - Example: `https://your-project.supabase.co`
  
- `VITE_SUPABASE_ANON_KEY` - Your Supabase anonymous key (from Supabase dashboard)
  - Found in: Project Settings → API → anon public key

### 2. **Gemini API (Optional)**
If using AI features:

- `GEMINI_API_KEY` - Your Gemini API key from Google AI Studio

## Steps to Configure Vercel

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add each variable with appropriate values:
   - Set **Environment** to "Production" for deployed variables
   - If needed for preview/development, also set "Preview" and "Development"
4. Redeploy your application

## Fixing the 404 and DNS Resolution Errors

The errors you were seeing were caused by:

1. **Hardcoded credentials in source code** - Now using environment variables
2. **Environment variables not being passed to the client** - Fixed in vite.config.ts
3. **Missing Vercel environment configuration** - Follow the steps above

## Local Development

For local development, create a `.env.local` file with your Supabase credentials:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

This file should NOT be committed to version control (already in .gitignore).

## Testing the Fix

After deploying to Vercel:

1. Clear your browser cache
2. Hard refresh the page (Ctrl+Shift+R on Windows)
3. Try logging in - it should now work without DNS errors
