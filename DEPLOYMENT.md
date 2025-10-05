# Cloudflare Deployment Guide

This guide helps you deploy the NextAuth Auth Platform to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (sign up at https://dash.cloudflare.com)
- Node.js 18 or later installed
- Git repository connected to GitHub

## Quick Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

1. **Push to GitHub**
   - Ensure your code is pushed to a GitHub repository
   - All changes should be committed

2. **Connect to Cloudflare Pages**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to **Pages** in the sidebar
   - Click **Create a project**
   - Click **Connect to Git**

3. **Configure Repository**
   - Select your GitHub repository
   - Choose the branch to deploy (e.g., `main`)

4. **Build Settings**
   - Framework preset: `Next.js`
   - Build command: `npm run build`
   - Build output directory: `.next`
   - Node version: `18` or `20`

5. **Environment Variables**
   Add these in the Cloudflare dashboard:
   ```
   NEXTAUTH_URL=https://your-app.pages.dev
   NEXTAUTH_SECRET=<generate-a-secure-random-string>
   ```

   Generate secret with:
   ```bash
   openssl rand -base64 32
   ```

6. **Deploy**
   - Click **Save and Deploy**
   - Wait for the build to complete (2-3 minutes)
   - Your app will be live at `https://your-project.pages.dev`

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Build the application**
   ```bash
   npm run build
   ```

4. **Deploy**
   ```bash
   wrangler pages deploy .next
   ```

5. **Set environment variables**
   ```bash
   wrangler pages secret put NEXTAUTH_SECRET
   wrangler pages secret put NEXTAUTH_URL
   ```

## Setting up Cloudflare Services

### 1. D1 Database (User Storage)

Create a database:
```bash
wrangler d1 create auth-database
```

Create users table:
```bash
wrangler d1 execute auth-database --command "CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)"
```

Bind to your Pages project:
```bash
wrangler pages secret put DATABASE_ID
```

### 2. R2 Storage (File Uploads)

Create a bucket:
```bash
wrangler r2 bucket create user-uploads
```

Generate access credentials:
```bash
wrangler r2 bucket sippy get user-uploads
```

### 3. Vectorize (Semantic Search)

Create an index:
```bash
wrangler vectorize create embeddings-index --dimensions=768 --metric=cosine
```

### 4. Workers AI (Chatbot)

Workers AI is available by default. Update your environment variables:
```
AI_GATEWAY_URL=https://gateway.ai.cloudflare.com/v1/YOUR_ACCOUNT_ID
```

## Custom Domain

1. Go to your Pages project settings
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain name
5. Follow DNS configuration instructions

## Environment Variables Reference

### Required
- `NEXTAUTH_URL` - Your app URL (e.g., https://yourapp.pages.dev)
- `NEXTAUTH_SECRET` - Random string for session encryption

### Optional (for Cloudflare services)
- `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare account ID
- `DATABASE_ID` - D1 database ID
- `R2_BUCKET_NAME` - R2 bucket name
- `VECTORIZE_INDEX_NAME` - Vectorize index name
- `AI_GATEWAY_URL` - Workers AI gateway URL

## Troubleshooting

### Build Fails
- Check Node version is 18 or higher
- Ensure all dependencies are in package.json
- Review build logs in Cloudflare dashboard

### Authentication Not Working
- Verify NEXTAUTH_URL matches your domain
- Check NEXTAUTH_SECRET is set
- Clear browser cookies and try again

### Database Connection Issues
- Verify D1 database is created
- Check database binding in wrangler.toml
- Ensure environment variables are set

## Production Checklist

- [ ] Environment variables configured
- [ ] NEXTAUTH_SECRET is secure and random
- [ ] Custom domain configured (optional)
- [ ] D1 database created and tables initialized
- [ ] R2 bucket created for file storage
- [ ] SSL/TLS enabled (automatic with Cloudflare)
- [ ] Test authentication flow
- [ ] Test all service pages
- [ ] Monitor error logs

## Support Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [Next.js on Cloudflare](https://developers.cloudflare.com/pages/framework-guides/nextjs)
- [Cloudflare D1 Docs](https://developers.cloudflare.com/d1)
- [Cloudflare R2 Docs](https://developers.cloudflare.com/r2)
- [Cloudflare Workers AI](https://developers.cloudflare.com/workers-ai)
- [NextAuth.js Documentation](https://next-auth.js.org)

## Cost Estimate

Cloudflare Free Tier includes:
- 500 builds/month
- Unlimited requests
- Unlimited bandwidth
- 100,000 D1 database reads/day
- 10 GB R2 storage

Perfect for development and small production apps!
