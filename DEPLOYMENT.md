# Deployment Guide

## Quick Start Options

### 1. GitHub Pages (Recommended - Free)

#### Steps:
1. Create a GitHub account (if you don't have one)
2. Create a new repository:
   - Name it anything you want
   - Make it public
   - Add description: "Professional Portfolio Website"

3. Push your files:
```bash
cd mrunal-portfolio-website
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

4. Configure GitHub Pages:
   - Go to Settings → Pages
   - Under "Build and deployment", select:
     - Source: Deploy from a branch
     - Branch: main, /(root)
   - Click Save
   - Wait for deployment (2-3 minutes)
   - Your site will be at: `https://yourusername.github.io/your-repo-name`

#### Using Custom Domain:
1. Buy a domain from: GoDaddy, Namecheap, or similar
2. Go to Settings → Pages → Custom domain
3. Enter your domain and save
4. Update DNS records at your domain provider:
   - Add GitHub's IP addresses as A records:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

---

### 2. Netlify (Very Easy - Free Tier Available)

#### Method 1: Drag & Drop
1. Go to [netlify.com](https://netlify.com)
2. Sign up (GitHub, Google, or email)
3. Go to "Sites"
4. Drag and drop your `mrunal-portfolio-website` folder
5. Your site is live! 🎉

#### Method 2: Connect GitHub Repository
1. Sign up on Netlify
2. Click "Connect your Git provider" → GitHub
3. Select your portfolio repository
4. Configure build settings (leave defaults for static site)
5. Click "Deploy site"
6. Get automatic deploys on every push to main

#### Custom Domain on Netlify:
1. Go to Site settings → Domain management
2. Add custom domain
3. Follow DNS instructions from your domain provider

---

### 3. Vercel (Very Popular - Free Tier)

#### Steps:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Configure project (defaults work fine)
6. Click "Deploy"
7. Your site is live at `your-project-name.vercel.app`

#### Custom Domain:
1. Go to Settings → Domains
2. Add your custom domain
3. Follow the DNS setup instructions

---

### 4. Cloudflare Pages (Fast CDN - Free)

#### Steps:
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Sign up/Login with GitHub
3. Connect to GitHub account
4. Select your repository
5. Configure build:
   - Build command: (leave empty for static)
   - Build output directory: / (root)
6. Click "Save and Deploy"

---

### 5. AWS S3 + CloudFront (Professional - $0-5/month)

#### Steps:
1. Create S3 bucket:
```bash
# Using AWS CLI
aws s3 mb s3://mrunal-portfolio --region us-east-1
```

2. Enable static website hosting:
   - Go to bucket Settings → Static website hosting
   - Index document: index.html
   - Error document: index.html

3. Upload files:
```bash
aws s3 sync . s3://mrunal-portfolio --acl public-read
```

4. Create CloudFront distribution:
   - Origin: Your S3 bucket
   - Viewer policy: HTTP and HTTPS
   - Set default root object: index.html

---

### 6. Firebase Hosting (Google - Free Tier)

#### Steps:
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize in your directory
firebase init hosting

# Deploy
firebase deploy --only hosting
```

Your site will be at: `your-project-name.firebaseapp.com`

---

### 7. Heroku (Easy - Free Tier Deprecated, but still available with alternatives)

Consider Render.com instead (similar to Heroku, has free tier):

#### Steps:
1. Go to [render.com](https://render.com)
2. Sign up with GitHub
3. Create New → Static Site
4. Connect repository
5. Configure:
   - Build command: (leave empty)
   - Publish directory: /
6. Deploy

---

## Domain Name Registration

### Popular Registrars:
- **Namecheap**: Best value (.com $8.88/year)
- **GoDaddy**: Largest registrar
- **Google Domains**: Simple interface
- **Cloudflare Registrar**: Lowest cost, transparent pricing

### DNS Configuration Tips:
- **CNAME**: For subdomains (www, blog, etc.)
- **A Record**: For main domain (points to IP address)
- **MX Record**: For email (if needed)
- **TXT Record**: For verification and security

---

## SSL/HTTPS

All recommended platforms provide **free SSL certificates**:
- GitHub Pages ✓
- Netlify ✓
- Vercel ✓
- Cloudflare Pages ✓
- Firebase ✓

---

## Post-Deployment Checklist

- [ ] Test website on desktop
- [ ] Test website on mobile
- [ ] Test on Chrome, Firefox, Safari
- [ ] Verify all links work
- [ ] Check form submissions (if any)
- [ ] Enable HTTPS (automatic on all platforms)
- [ ] Add to Google Search Console
- [ ] Add to Bing Webmaster Tools
- [ ] Set up Google Analytics
- [ ] Monitor uptime with services like UptimeRobot

---

## Performance Optimization

### Image Optimization:
```bash
# Use tools like:
# - TinyPNG (tinypng.com)
# - ImageOptim (imageoptim.com)
# - Online converters for WebP format
```

### Cache Settings:
- Netlify: Automatic intelligent caching
- Vercel: Automatic edge caching
- Cloudflare: Configure cache rules in dashboard

### Monitoring:
- Google PageSpeed Insights: [pagespeed.web.dev](https://pagespeed.web.dev)
- Lighthouse: Built into Chrome DevTools (F12)
- GTmetrix: [gtmetrix.com](https://gtmetrix.com)

---

## Maintenance

### Regular Updates:
1. Update content quarterly
2. Add new projects/achievements
3. Update links and contact info
4. Refresh certifications/awards

### Version Control:
```bash
# Keep local copy backed up
git push origin main  # After any updates
```

### Analytics:
Set up Google Analytics:
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Add tracking code to `<head>` in index.html:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## Common Issues & Solutions

### Site not updating after push?
- Clear browser cache (Ctrl+Shift+Delete)
- Clear CDN cache in deployment settings
- Wait 5-10 minutes for propagation

### Custom domain not working?
- Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)
- Wait up to 48 hours for DNS changes
- Verify DNS records are correct

### Images not loading?
- Check file paths are correct
- Ensure images are in the right directory
- Convert to web-friendly formats (JPG, PNG, WebP)

---

## Recommended Deployment Path

**For Beginners**: GitHub Pages
- Free
- Simple
- Great for portfolios
- Good CDN

**For Professionals**: Netlify + Custom Domain
- Very fast
- Excellent UI
- Git integration
- CDN included
- Free tier sufficient

**For Maximum Control**: AWS S3 + CloudFront
- Professional setup
- Most flexible
- Lower cost at scale
- Learn cloud technologies

---

## Need Help?

- Netlify Support: [netlify.com/support](https://netlify.com/support)
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- GitHub Pages Docs: [pages.github.com](https://pages.github.com)
- Firebase Docs: [firebase.google.com/docs](https://firebase.google.com/docs)

---

**Happy Deploying! 🚀**
