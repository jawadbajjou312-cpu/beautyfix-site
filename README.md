# BeautyFix Landing Page

Premium mobile med-spa landing page for BeautyFix.you

## Quick Deploy to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Create a GitHub account** (if you don't have one): https://github.com/signup

2. **Create a new repository**:
   - Go to https://github.com/new
   - Name it `beautyfix-site`
   - Keep it Public or Private (your choice)
   - Click "Create repository"

3. **Upload these files**:
   - On the repository page, click "uploading an existing file"
   - Drag and drop ALL files from this folder
   - Click "Commit changes"

4. **Deploy to Vercel**:
   - Go to https://vercel.com
   - Sign up with your GitHub account
   - Click "Add New Project"
   - Import your `beautyfix-site` repository
   - Click "Deploy" (default settings are fine)
   - Wait ~1 minute for deployment

5. **Connect your domain**:
   - In Vercel dashboard, go to your project
   - Click "Settings" → "Domains"
   - Add `beautyfix.you`
   - Follow the DNS instructions to point your domain

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to this folder
cd beautyfix-site

# Deploy
vercel

# Follow the prompts
```

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

## Files Overview

- `index.html` - Main HTML with SEO meta tags
- `src/App.jsx` - The landing page component
- `src/main.jsx` - React entry point
- `public/beautyfix-logo.png` - Your logo
- `package.json` - Dependencies and scripts
- `vite.config.js` - Build configuration

## Support

Built with React + Vite + Lucide Icons
