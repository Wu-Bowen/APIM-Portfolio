# Netlify Deployment Guide

Complete guide for deploying Hannah Xiao's APM Portfolio to Netlify.

## =€ Quick Deploy (Recommended)

### Option 1: Deploy with Git (Recommended for Continuous Deployment)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Hannah Xiao APM Portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/APIM-Portfolio.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [Netlify](https://app.netlify.com/)
   - Click **"Add new site"** ’ **"Import an existing project"**
   - Choose **GitHub** and authorize Netlify
   - Select your repository: `APIM-Portfolio`
   - Netlify will auto-detect the settings from `netlify.toml`:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click **"Deploy site"**

3. **Wait for deployment:**
   - Netlify will build and deploy your site (usually takes 1-3 minutes)
   - You'll get a URL like: `https://random-name-123456.netlify.app`

4. **Custom domain (optional):**
   - Go to **Site settings** ’ **Domain management**
   - Click **"Add custom domain"**
   - Follow instructions to add your domain

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy
   ```

4. **Follow the prompts:**
   - Authorize with Netlify
   - Create a new site or link existing
   - Specify publish directory: `dist`

5. **Deploy to production:**
   ```bash
   netlify deploy --prod
   ```

### Option 3: Drag & Drop Deploy

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `dist` folder onto the page
   - Your site will be deployed instantly!

*Note: This method doesn't support continuous deployment from Git.*

## ™ Configuration Details

### Files Created for Netlify

1. **`netlify.toml`** (Root directory)
   - Build configuration
   - Redirect rules for SPA routing
   - Headers for caching and security

2. **`public/_redirects`** (Backup routing config)
   - Ensures React Router works properly
   - Redirects all routes to index.html

### Build Settings

These are automatically configured in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
  NODE_VERSION = "18"
```

### Routing Configuration

The site uses client-side routing (React Router). The configuration ensures:
- All routes redirect to `index.html` with status 200
- Browser can handle routing on refresh
- No 404 errors on deep links

## =' Environment Variables (Optional)

If you need environment variables:

1. **In Netlify Dashboard:**
   - Go to **Site settings** ’ **Environment variables**
   - Add your variables (e.g., `VITE_API_KEY`)

2. **In your code:**
   ```javascript
   const apiKey = import.meta.env.VITE_API_KEY
   ```

*Note: This project doesn't require environment variables by default.*

## =Ê Performance & Optimization

### Automatic Optimizations

Netlify automatically provides:
-  Global CDN
-  Automatic HTTPS
-  Asset optimization
-  Build caching
-  Instant cache invalidation

### Custom Headers Configured

In `netlify.toml`, we've added:

1. **Static Asset Caching:**
   - Assets cached for 1 year
   - Fonts cached immutably

2. **Security Headers:**
   - X-Frame-Options: DENY
   - X-Content-Type-Options: nosniff
   - X-XSS-Protection: enabled
   - Referrer-Policy: strict-origin-when-cross-origin

## <¯ Post-Deployment Checklist

After deployment, verify:

- [ ] Home page loads correctly
- [ ] All navigation links work
- [ ] Case study pages render properly
- [ ] APM Take-Home page displays correctly
- [ ] Resume PDF downloads work
- [ ] Cover letter PDF downloads work
- [ ] Mobile responsive design works
- [ ] All routes work on direct access (no 404s)
- [ ] Images and assets load properly

## = Continuous Deployment

Once connected to GitHub:

1. **Auto-deploy on push:**
   - Every push to `main` triggers a new build
   - Netlify builds and deploys automatically

2. **Deploy previews:**
   - Pull requests get preview deployments
   - Test changes before merging

3. **Branch deploys:**
   - Deploy specific branches for testing
   - Configure in **Site settings** ’ **Build & deploy**

## < Custom Domain Setup

### Add Your Domain

1. **In Netlify:**
   - Go to **Domain settings**
   - Click **"Add custom domain"**
   - Enter your domain: `hannahxiao.com`

2. **Configure DNS:**

   **Option A: Use Netlify DNS (Recommended)**
   - Transfer nameservers to Netlify
   - Netlify handles everything automatically

   **Option B: Use External DNS**
   - Add A record: `104.198.14.52`
   - Add CNAME: `www` ’ `your-site.netlify.app`

3. **Enable HTTPS:**
   - Netlify provides free SSL automatically
   - Usually ready within minutes

## = Troubleshooting

### Build Fails

**Problem:** Build fails on Netlify
```bash
Error: Command failed with exit code 1
```

**Solution:**
1. Check Node version in `netlify.toml` (set to 18)
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`
4. Check Netlify build logs for specific errors

### 404 on Page Refresh

**Problem:** Routes return 404 when refreshed

**Solution:**
- Verify `netlify.toml` exists in root
- Verify `public/_redirects` exists
- Redeploy the site

### Assets Not Loading

**Problem:** PDFs or images not loading

**Solution:**
1. Ensure files are in `public/assets/` directory
2. Check file paths use absolute paths: `/assets/file.pdf`
3. Verify files are committed to Git
4. Clear Netlify cache and redeploy

### Slow Build Times

**Problem:** Builds take too long

**Solution:**
1. Enable build caching (on by default)
2. Check if node_modules are being committed (they shouldn't be)
3. Optimize dependencies if needed

## =ñ Testing Before Deployment

Test the production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Visit `http://localhost:4173` to test the production build locally.

## = Security Considerations

1. **No Secrets in Code:**
   - Never commit API keys or secrets
   - Use Netlify environment variables

2. **HTTPS Only:**
   - Netlify enforces HTTPS automatically
   - No additional configuration needed

3. **Security Headers:**
   - Already configured in `netlify.toml`
   - Protects against common attacks

## =È Analytics (Optional)

Add analytics to your site:

1. **Netlify Analytics:**
   - Go to **Analytics** tab in Netlify
   - Enable for $9/month (server-side, privacy-friendly)

2. **Google Analytics:**
   - Add tracking ID to environment variables
   - Import in your app

3. **Plausible/Fathom:**
   - Privacy-focused alternatives
   - Add script tag in `index.html`

## <“ Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
- [React Router on Netlify](https://docs.netlify.com/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)

##  Deployment Complete!

Your portfolio is now live and accessible worldwide! <‰

**Next steps:**
1. Share your URL with the Perplexity APM team
2. Add the URL to your resume and cover letter
3. Monitor your site with Netlify's built-in analytics

---

**Need Help?**
- Check [Netlify Support](https://answers.netlify.com/)
- Review build logs in Netlify dashboard
- Test locally first with `npm run build && npm run preview`
