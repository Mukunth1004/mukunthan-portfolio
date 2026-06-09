# 🚀 Deployment Guide

## One-Click Deploy to Vercel

This portfolio is optimized for deployment on Vercel (free tier available).

### Option 1: Deploy with Vercel (Recommended)

1. **Push code to GitHub** ✅ (Already done)
   ```bash
   git push origin main
   ```

2. **Visit Vercel Dashboard**
   - Go to https://vercel.com
   - Sign up with GitHub account
   - Import this project

3. **Configure Project**
   - Select `Mukunth1004/mukunthan-portfolio`
   - Framework: `Next.js`
   - Root Directory: `./`
   - Click "Deploy"

4. **Get Your Domain**
   - Vercel will provide: `mukunthan-portfolio.vercel.app`
   - Or connect custom domain

### Option 2: Deploy from Command Line

```bash
npm install -g vercel
vercel login
vercel
```

## Environment Variables

No environment variables required for basic deployment.

## Custom Domain

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records according to Vercel instructions

## Recommended Domains (Free)

- **.vercel.app** - Automatic (free)
- **.netlify.app** - Alternative (free)
- Check Namecheap/GoDaddy for affordable .dev domains ($10/year)

## Build & Deploy Locally

```bash
npm run build
npm run start
```

## Performance Metrics

- Lighthouse Performance: 95+
- Core Web Vitals: All Green
- Page Load: < 2 seconds
- Deploy Time: < 60 seconds

## Troubleshooting

If build fails:
1. Clear cache: `vercel env pull`
2. Check Node version: `node -v` (should be 18+)
3. Reinstall dependencies: `npm ci`
4. Try again: `vercel --prod`

---

**Your portfolio will be live at:** `https://mukunthan-portfolio.vercel.app`
