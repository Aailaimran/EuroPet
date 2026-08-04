# 🚀 Sanity CMS Integration — Euro Pet Express

Complete Sanity CMS setup for Euro Pet Express website. Headless CMS with embedded studio, automatic content seeding, and ISR support.

## Quick Start

### 1️⃣ **Seed Your Content** (First Time)

```bash
npm run seed
```

This extracts all hardcoded content from your codebase and pushes it to Sanity. You'll see your content immediately available in Studio.

### 2️⃣ **Start Dev Server**

```bash
npm run dev
```

### 3️⃣ **Access Studio**

Visit http://localhost:3000/studio to edit your content.

---

## What's Included

### ✅ Core Setup
- **6 Sanity packages** installed and configured
- **3 config files** (config, client, image)
- **10 content schemas** (pages + content types)
- **Sanity Studio** embedded at `/studio` route

### ✅ Content Structure
- **Site Settings** — Phone, email, social links, logo
- **Home Page** — Hero, vehicle section, SEO
- **Routes Page** — Routes and metadata
- **11 Transport Routes** — UK to Europe destinations
- **Services Page** — 5 service offerings
- **Rescue Page** — Rescue program intro
- **About Page** — Founder story + 6 FAQs
- **Compliance Page** — Legal/standards info
- **Contact Page** — Form settings
- **Rescue Dogs** — Adoptable dogs listings

### ✅ Features
- **Automatic Seeding** — No manual data entry required
- **ISR Support** — Pages revalidate automatically (1 hour default)
- **Media Plugin** — Easy asset management in Studio
- **Image Optimization** — Automatic via Sanity CDN
- **GROQ Queries** — Flexible content fetching

---

## File Structure

```
sanity/
├── sanity.config.ts          # Studio config + desk structure
├── sanity.client.ts          # API client + fetch helper
├── sanity.image.ts           # Image URL builder
└── schemas/                  # 10 content type schemas
    ├── siteSettings.ts
    ├── homePage.ts
    ├── routesPage.ts
    ├── route.ts
    ├── servicesPage.ts
    ├── rescuePage.ts
    ├── aboutPage.ts
    ├── compliancePage.ts
    ├── contactPage.ts
    └── rescueDog.ts

app/studio/                    # Studio route
├── layout.tsx
└── [[...index]]/page.tsx

scripts/
└── seed-sanity.mjs           # Auto-seeding script

Documentation:
├── SANITY_SETUP.md           # Detailed setup guide
├── SANITY_IMPLEMENTATION_SUMMARY.md # What was built
├── NEXT_STEPS.md             # Migration path forward
└── README_SANITY.md          # This file
```

---

## Environment Variables

Required in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token (local only)
```

Get these from https://manage.sanity.io/

---

## Studio Navigation

**Left Sidebar Structure:**

```
Website Content
├── 🏠 Home Page          → Hero, vehicle section, SEO
├── 🗺️ Routes Page        → Routes intro
├── 🐾 Our Services       → 5 service offerings
├── 🐕 Rescue a Dog       → Rescue program intro
├── 👤 About Us           → Founder story, FAQs
├── 📋 Compliance         → Legal/standards
├── 📞 Contact Page       → Form settings
├── ─────────────────────
├── 🚐 Transport Routes   → 11 routes (editable)
├── 🐶 Rescue Dogs        → Adoptable dogs
├── ─────────────────────
└── ⚙️ Site Settings      → Global config
```

---

## Usage Examples

### Fetch Single Page

```tsx
import { sanityFetch } from '@/sanity/sanity.client'

const homePage = await sanityFetch({
  query: `*[_type == "homePage"][0]`,
  revalidate: 3600,
})
```

### Fetch Collection

```tsx
const routes = await sanityFetch({
  query: `*[_type == "route" && isActive] | order(displayOrder)`,
  revalidate: 3600,
})
```

### Use Images

```tsx
import { urlForImage } from '@/sanity/sanity.image'

const imageUrl = urlForImage(document.image)
```

---

## Common Tasks

### Edit Content in Studio
1. Open http://localhost:3000/studio
2. Click any page or collection
3. Edit fields
4. Save automatically
5. Changes appear after ISR revalidation (up to 1 hour)

### Add New Route
1. Studio → 🚐 Transport Routes → Create
2. Fill in name, country, frequency, highlights
3. Set `isActive: true` and `displayOrder`
4. Publish

### Add Rescue Dog
1. Studio → 🐶 Rescue Dogs → Create
2. Upload photo, fill details
3. Set status to "Available"
4. Publish

### Connect Frontend Page to Sanity
1. Open page component (e.g., `app/routes/page.tsx`)
2. Import `sanityFetch` from `@/sanity/sanity.client`
3. Call `await sanityFetch()` in async component
4. Replace hardcoded data with Sanity values
5. Remove old import statement
6. Test locally, then deploy

---

## ISR Revalidation

Pages automatically regenerate when:
- **1 hour passes** (default revalidation time)
- **User visits** the page after revalidation time

For instant updates after editing:
- Deploy webhook handler to call `res.revalidate('/path')`
- Configure in Sanity project → Webhooks
- Triggers immediate page regeneration on publish

---

## Deployment

### Environment Setup
1. Add env vars to Vercel project settings
2. ⚠️ Do NOT expose `SANITY_API_WRITE_TOKEN` in production

### Pre-Deployment
```bash
npm run build
npm run start  # Test production build locally
```

### Deploy
- Push to GitHub → Vercel auto-deploys
- Or use `vercel deploy`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Studio won't load | Check env vars, verify token permissions |
| Seed fails | Ensure `SANITY_API_WRITE_TOKEN` is correct and has write access |
| Content not showing | Wait for ISR revalidation or manually rebuild |
| Images broken | Verify image field has data in Sanity, check `urlForImage()` |
| Type errors | Check schema field names match your GROQ queries |

---

## Documentation

- 📖 **SANITY_SETUP.md** — Detailed setup and customization guide
- 🎯 **NEXT_STEPS.md** — Migration path and quick actions
- 📋 **SANITY_IMPLEMENTATION_SUMMARY.md** — What was built and why

---

## Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Next.js Integration**: https://www.sanity.io/docs/getting-started-with-next-js
- **Image Optimization**: https://www.sanity.io/docs/image-urls

---

## Key Features

✅ **Zero Manual Setup** — Content auto-seeded from codebase  
✅ **Embedded Studio** — No separate deployment needed  
✅ **ISR Support** — Automatic page regeneration  
✅ **Image Optimization** — Sanity CDN handles resizing  
✅ **Rich Editing** — Non-technical team can edit content  
✅ **Scalable** — Add new schemas and pages easily  
✅ **Type-Safe** — TypeScript support throughout  

---

## Next Steps

1. ✅ `npm run seed` — Populate Sanity
2. ✅ `npm run dev` — Start dev server
3. ✅ Visit `/studio` — Edit your content
4. ⏳ Update page components to fetch from Sanity
5. ⏳ Deploy to Vercel

**Your CMS is ready to use! Start with the seed script.** 🚀
