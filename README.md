# Queensway Mobile Tyres — Production Deploy Branch

**This branch is auto-generated.** It contains only the compiled static
output of the React/Vite app from the `main` branch, ready to drop
straight into a shared-hosting `public_html/`.

## What's in here

```
.htaccess        Apache rewrite rules (SPA fallback + 301 redirects + caching)
index.html       HTML shell for the SPA
favicon.png      Favicons
favicon.svg
opengraph.jpg    Social share image
robots.txt       Crawler directives
sitemap.xml      XML sitemap (see lastmod inside)
assets/          Hashed JS / CSS / images emitted by Vite
```

## Deploying to Hostinger shared hosting

1. In hPanel go to **Websites → Manage → Git**.
2. Add this repository (`imkhan729/queenswaymobiletyres-New`) and select
   the **`deploy`** branch.
3. Set the **Install path** to `public_html` (or the subfolder that
   maps to your primary domain).
4. Click **Create** and then **Force deploy** — Hostinger will pull
   the contents of this branch straight into your web root.
5. Make sure `mod_rewrite` is enabled (it is on all Hostinger shared
   plans by default) so `.htaccess` works.

## Rebuilding this branch

From the project root on `main`:

```bash
npm install
npm run build:static          # produces dist/public/
git worktree add ../qw-deploy deploy
cp -r dist/public/. ../qw-deploy/
cd ../qw-deploy
git add -A
git commit -m "Deploy: <short description of changes>"
git push origin deploy
```

Hostinger will pick up the new commit on the next deploy.
