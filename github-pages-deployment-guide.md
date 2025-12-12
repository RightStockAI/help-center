# GitHub Pages Deployment Guide for RightStockAI Help Center

## ✅ Configuration Completed

Your Docusaurus site has been successfully configured for GitHub Pages deployment with the following updates:

### docusaurus.config.ts Changes
```typescript
const config: Config = {
  title: 'RightStockAI Documentation',
  tagline: 'AI-Powered Stock Analysis for Indian Markets',
  favicon: 'img/favicon.ico',

  // GitHub Pages configuration
  url: 'https://rightstockai.github.io',
  baseUrl: '/help-center/',
  organizationName: 'RightStockAI',
  projectName: 'help-center',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  // ... rest of config
};
```

### package.json Scripts
The deploy script is already configured:
```json
{
  "scripts": {
    "deploy": "docusaurus deploy"
  }
}
```

## 🚀 Deployment Options

### Option 1: Using GitHub Personal Access Token (Recommended)

1. **Set Environment Variables:**
   ```bash
   export GIT_USER=your_github_username
   export GITHUB_TOKEN=your_personal_access_token
   ```

2. **Run Deployment:**
   ```bash
   npm run deploy
   ```

### Option 2: Using GitHub Actions (Automatic) ✅ IMPLEMENTED

✅ **Workflow file created**: `.github/workflows/deploy.yml`

**How it works:**
- Automatically deploys on every push to `main` branch
- Uses the built-in `GITHUB_TOKEN` for authentication
- Installs dependencies, builds the site, and deploys to GitHub Pages

**Next Steps:**
1. **Commit and push** the workflow file:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions workflow for automatic deployment"
   git push origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Set Source to "GitHub Actions"
   - The workflow will automatically deploy your site on the next push

### Option 3: Manual Deployment with SSH

1. **Configure Git for SSH:**
   ```bash
   export USE_SSH=true
   npm run deploy
   ```

2. **Set up SSH key** for your GitHub account

## 📋 Next Steps

1. **Choose a deployment method** (Token-based is recommended for simplicity)

2. **Commit and push** all changes to your repository:
   ```bash
   git add .
   git commit -m "Configure Docusaurus for GitHub Pages deployment"
   git push origin main
   ```

3. **Run deployment** using your chosen method

4. **Verify deployment:**
   - Your site will be available at: `https://rightstockai.github.io/help-center/`
   - Check the GitHub Pages settings in your repository

## 🔧 Troubleshooting

- **Build errors**: Run `npm run build` locally to debug
- **Permission errors**: Ensure your GitHub token has `repo` permissions
- **Branch issues**: Verify the `gh-pages` branch is created and has content

## 📁 Generated Files

After deployment, you'll have:
- `build/` directory with generated static files
- `gh-pages` branch with deployed content
- GitHub Pages site at the configured URL

Your Docusaurus help center is now ready for GitHub Pages deployment!