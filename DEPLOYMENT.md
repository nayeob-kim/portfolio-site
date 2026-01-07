# Deployment Guide

## Step 1: Set Up GitHub

1. **Create a GitHub account** (if you don't have one)
   - Go to https://github.com
   - Sign up for a free account

2. **Create a new repository**
   - Click the "+" icon in the top right → "New repository"
   - Name it: `portfolio-site` (or any name you prefer)
   - Make it **Public** (required for free GitHub Pages)
   - **Don't** initialize with README, .gitignore, or license
   - Click "Create repository"

## Step 2: Push Your Code to GitHub

### Option A: Using GitHub Desktop (Easiest for beginners)

1. **Download GitHub Desktop**
   - Go to https://desktop.github.com
   - Download and install

2. **Set up the repository**
   - Open GitHub Desktop
   - File → Add Local Repository
   - Navigate to: `/Users/nayeobkim/Cursor/2026-portfolio-site`
   - Click "Add"

3. **Commit and push**
   - You'll see all your files listed
   - At the bottom, type a commit message: "Initial commit"
   - Click "Commit to main"
   - Click "Publish repository" (top right)
   - Choose your GitHub account and repository name
   - Click "Publish"

### Option B: Using Terminal (More control)

1. **Initialize git** (if not already done)
   ```bash
   cd /Users/nayeobkim/Cursor/2026-portfolio-site
   git init
   ```

2. **Add all files**
   ```bash
   git add .
   ```

3. **Make your first commit**
   ```bash
   git commit -m "Initial commit"
   ```

4. **Connect to GitHub** (replace YOUR_USERNAME with your GitHub username)
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio-site.git
   git branch -M main
   git push -u origin main
   ```

## Step 3: Deploy to GitHub Pages

1. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "Deploy from a branch"
   - Choose branch: `main`
   - Choose folder: `/ (root)`
   - Click "Save"

2. **Wait for deployment**
   - GitHub will build your site (takes 1-2 minutes)
   - You'll see a green checkmark when it's done
   - Your site will be live at: `https://YOUR_USERNAME.github.io/portfolio-site`

## Step 4: Connect Your GoDaddy Domain

### In GitHub Pages:

1. Go to your repository → Settings → Pages
2. Under "Custom domain", enter your domain (e.g., `yourdomain.com`)
3. Check "Enforce HTTPS" (after DNS propagates)

### In GoDaddy:

1. **Log into GoDaddy**
   - Go to https://godaddy.com and sign in
   - Go to "My Products" → "DNS" or "Domain Manager"

2. **Edit DNS Records**
   - Find your domain and click "DNS" or "Manage DNS"
   - You need to add/edit these records:

   **For root domain (yourdomain.com):**
   - Type: `A`
   - Name: `@` (or leave blank)
   - Value: `185.199.108.153`
   - TTL: 600 (or default)
   - Click "Add" or "Save"
   
   - Add another A record:
   - Type: `A`
   - Name: `@`
   - Value: `185.199.109.153`
   
   - Add another A record:
   - Type: `A`
   - Name: `@`
   - Value: `185.199.110.153`
   
   - Add another A record:
   - Type: `A`
   - Name: `@`
   - Value: `185.199.111.153`

   **For www subdomain (www.yourdomain.com):**
   - Type: `CNAME`
   - Name: `www`
   - Value: `YOUR_USERNAME.github.io` (replace with your GitHub username)
   - TTL: 600 (or default)
   - Click "Add" or "Save"

3. **Wait for DNS propagation**
   - Can take 24-48 hours, but often works within minutes
   - You can check status at: https://www.whatsmydns.net

4. **Verify in GitHub**
   - After DNS propagates, go back to GitHub Pages settings
   - You should see a green checkmark next to your domain
   - Check "Enforce HTTPS" if not already checked

## Step 5: Test Your Site

- Visit your domain: `https://yourdomain.com`
- Test all features:
  - Password protection
  - Project modals
  - Text-to-speech
  - Mobile/tablet responsiveness

## Troubleshooting

**If GitHub Pages shows 404:**
- Make sure `index.html` is in the root directory
- Check that the repository is Public (not Private)
- Wait a few minutes and refresh

**If domain doesn't work:**
- Verify DNS records are correct
- Wait for DNS propagation (can take up to 48 hours)
- Check GitHub Pages settings show your domain

**If HTTPS doesn't work:**
- Wait for DNS to fully propagate
- Then enable "Enforce HTTPS" in GitHub Pages settings

## Alternative: Netlify (Easier DNS setup)

If GitHub Pages seems complicated, **Netlify** is even easier:

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Click "Deploy"
6. Go to Site settings → Domain management
7. Add your GoDaddy domain
8. Netlify will give you DNS records to add in GoDaddy (simpler than GitHub Pages)

---

**Need help?** Let me know which step you're on and I can guide you through it!
