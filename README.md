# OneStopBuildly — Board Material Content Site

A content marketing website for B2B building materials export, focused on WPC wall panels, UV marble sheets, WPC decking, SPC flooring and PS wall panels. Built to capture long-tail search traffic and direct qualified leads to the main site inquiry page.

## Tech Stack

- **Framework**: Next.js 16 (App Router, SSG)
- **Language**: TypeScript
- **Styling**: CSS Modules + Design Tokens (no Tailwind)
- **Fonts**: Fraunces (serif, headings) + Manrope (sans, body) via next/font
- **SEO**: next-sitemap, JSON-LD structured data, per-page metadata
- **Deployment**: Vercel

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

## Project Structure

```
app/
├── layout.tsx              # Root layout: fonts + Organization Schema
├── page.tsx                # Homepage (hero + categories + blog + CTA)
├── sitemap.ts              # Auto sitemap.xml
├── robots.ts               # robots.txt with sitemap declaration
├── blog/                   # Blog list + article pages
├── products/               # Product category overview + detail pages
├── about/                  # Company info
└── contact/                # Inquiry redirect to main site
components/                  # Header, Footer, ProductCard, BlogCard, CTA, etc.
lib/
├── products.ts             # 6 categories, 24 products (real SONSILL data)
├── blog.ts                 # 4 SEO articles
├── seo.ts                  # Site config + metadata builder
└── markdown.tsx            # Lightweight Markdown renderer
styles/
└── tokens.css              # Design tokens (colors, fonts, spacing)
```

## Content Management

Product and blog data are stored in TypeScript files under `lib/`. To update content:

1. **Products**: Edit `lib/products.ts` — add/modify product entries
2. **Blog**: Edit `lib/blog.ts` — add articles in Markdown format
3. **Site config**: Edit `lib/seo.ts` — update domain, email, inquiry URL

## Deployment to Vercel

### Step 1: Push to GitHub

```bash
cd board-material-site
git init
git add .
git commit -m "Initial commit: OneStopBuildly content site"
git remote add origin https://github.com/YOUR_USERNAME/onestopbuildly-content.git
git push -u origin main
```

### Step 2: Connect Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Framework preset: Next.js (auto-detected)
5. Click "Deploy"

### Step 3: Add Custom Domain

1. In Vercel project settings, go to "Domains"
2. Add your domain (e.g., `onestopbuildly.com` or a subdomain)
3. Go to NameSilo DNS settings and add:
   - `A` record: `@` → `76.76.21.21` (Vercel IP)
   - Or `CNAME` record: `www` → `cname.vercel-dns.com`
4. Wait for DNS propagation (5-30 minutes)
5. Vercel auto-issues SSL certificate

### Step 4: Update Site Config

After deployment, update `lib/seo.ts`:
- `url`: Change to your actual domain
- `inquiryUrl`: Point to main site inquiry page
- `contactEmail`: Update to real email

## SEO Features

- SSG static generation (20 pages pre-rendered)
- Auto sitemap.xml with all URLs
- robots.txt with sitemap declaration
- JSON-LD structured data:
  - Organization (site-wide)
  - FAQPage (product category pages)
  - Article (blog pages)
  - BreadcrumbList (all sub-pages)
- Per-page metadata (title, description, canonical, OpenGraph)
- Semantic URL slugs (e.g., `/products/indoor-wpc-wall-panels`)

## Design Direction

- **Aesthetic**: Editorial / Atelier (studio magazine)
- **Background**: Warm cream (#F5F1EA) — not pure white
- **Typography**: Serif headings (Fraunces) + sans body (Manrope)
- **Color palette**: Material-inspired tones (stone green, wood brown, forest green)
- **Layout**: Asymmetric grid, generous whitespace, magazine-style
- **Motion**: Restrained fade-in only, no decorative animation

## Replacing Placeholder Images

All images currently use `picsum.photos` placeholders. Replace with real product photos:

1. Add images to `public/images/products/`
2. Update `image` fields in `lib/products.ts` and `lib/blog.ts`
3. Or use a CDN URL (e.g., `https://cdn.onestopbuildly.com/images/...`)

## License

Proprietary — OneStopBuildly (Haining Wanzhu Decoration Materials Co., Ltd.)
