# Quoted Studio

Earned authority acquisition agency. Next.js 14, Tailwind CSS, TypeScript.

## Deploy to Vercel

```bash
# Extract
tar -xzf quoted-studio.tar.gz
cd quoted-studio

# Install
npm install

# Push to GitHub
git init && git add . && git commit -m "launch"
git remote add origin git@github.com:YOUR-USERNAME/quoted-studio.git
git push -u origin main
```

Then go to [vercel.com/new](https://vercel.com/new), import the repo, click **Deploy**.

## 3 things to update before going live

1. **Calendly** — `app/contact/page.tsx` — replace `https://calendly.com/YOUR-LINK`
2. **Email** — `app/contact/page.tsx` — replace `hello@quotedstudio.com.au`
3. **Domain** — Vercel dashboard > Settings > Domains

## What is included

### Pages (11)
| Route | Page |
|-------|------|
| `/` | Homepage (hero, logo bar, problem, what we do, how it works, comparison table, who for, value props, pricing preview, FAQ preview, CTA) |
| `/services` | Full service breakdown + what this is not |
| `/how-it-works` | 3-phase process detail |
| `/pricing` | 3 tiers, setup fee explanation, guarantee |
| `/industries` | 6 verticals with example angles |
| `/results` | Metrics + case study placeholder |
| `/about` | Founder story + beliefs |
| `/faq` | 12 accordion FAQs |
| `/contact` | Form + Calendly + email |
| `/blog` | Coming soon placeholder |
| `404` | Custom branded 404 |

### SEO infrastructure
- Auto-generated `sitemap.xml` (all routes)
- Auto-generated `robots.txt`
- FAQ Schema structured data (Google rich results)
- LocalBusiness + Service structured data
- OG image (auto-generated 1200x630)
- Per-page meta titles and descriptions
- Font preloading (no layout shift)

### Design
- Instrument Serif + DM Sans (Google Fonts)
- Dark luxury editorial (near-black + brass gold)
- Film grain overlay
- Scroll-triggered reveal animations (Intersection Observer)
- Scroll-aware transparent/blur header
- Responsive mobile menu (xl breakpoint for 7 nav items)
- Comparison table (Quoted Studio vs PR vs Link Building vs DIY)
- "Clients Quoted In" logo bar placeholder

### Components
- `Reveal` — scroll-triggered fade/slide animation
- `Header` — sticky, scroll-aware, responsive
- `Footer` — full sitemap links + CTA

## Optional upgrades after launch

- Connect form to [Formspree](https://formspree.io) or Zapier webhook
- Add [Vercel Analytics](https://vercel.com/docs/analytics) (`npm i @vercel/analytics`)
- Replace logo bar text with real publication SVG logos
- Write first blog posts targeting "how to get quoted in media"
- Add client testimonials to Results page as they come in

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000
