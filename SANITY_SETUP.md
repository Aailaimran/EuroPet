# Sanity CMS Setup Guide — Euro Pet Express

This guide walks through the complete Sanity CMS integration for Euro Pet Express.

## ✅ What's Already Done

- ✅ All Sanity packages installed
- ✅ Sanity config files created (`sanity/sanity.config.ts`, `sanity/sanity.client.ts`, `sanity/sanity.image.ts`)
- ✅ All schema definitions created (10 content types)
- ✅ Sanity Studio embedded at `/studio` route
- ✅ Comprehensive data seeding script created
- ✅ Environment variables added to project

## 📋 Step-by-Step Setup

### 1. **Verify Environment Variables**

Ensure your `.env.local` file contains all required Sanity variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=your_read_token
SANITY_API_WRITE_TOKEN=your_write_token
```

These should already be set from your Sanity project. If not, get them from:
- **Project ID & Dataset**: https://manage.sanity.io/
- **API Tokens**: Create under Project → API → Tokens

### 2. **Seed Your Content (First Time Only)**

Run the seeding script to populate Sanity with all hardcoded content:

```bash
npm run seed
```

This script will:
- Extract all content from the existing codebase
- Create documents in Sanity for:
  - Site Settings (phone, email, social links)
  - Home Page (hero, vehicle section)
  - Routes Page (11 transport routes)
  - Services Page (5 service offerings)
  - Rescue Page
  - About Page (founder story, FAQs)
  - Compliance Page
  - Contact Page

**Note**: The script uses your `SANITY_API_WRITE_TOKEN` to push data. This token should have write permissions in your Sanity project.

### 3. **Start the Dev Server**

```bash
npm run dev
```

Then open:
- **Website**: http://localhost:3000
- **Sanity Studio**: http://localhost:3000/studio

### 4. **Access Sanity Studio**

Visit `http://localhost:3000/studio` to manage your content:

**Left Sidebar Structure:**
- 🏠 **Home Page** — Hero section, vehicle details, SEO
- 🗺️ **Routes Page** — Routes page intro and meta
- 🐾 **Our Services** — 5 service offerings with descriptions
- 🐕 **Rescue a Dog** — Rescue program intro
- 👤 **About Us** — Founder story, FAQs
- 📋 **Compliance** — Legal and standards info
- 📞 **Contact Page** — Contact form settings
- 🚐 **Transport Routes** — All 11 routes (editable)
- 🐶 **Rescue Dogs** — Rescue dogs available for adoption (new entries)
- ⚙️ **Site Settings** — Phone, email, social links

### 5. **Edit Content in Studio**

You can now edit all website content directly in Sanity Studio without touching code:
- Update hero headlines, descriptions, images
- Add/edit/hide routes
- Manage rescue dogs listings
- Change contact page messaging
- Update FAQs

All changes sync to your Next.js app via **Incremental Static Regeneration (ISR)** with 1-hour revalidation (configurable).

---

## 🔄 Connecting Pages to Sanity

The frontend pages currently still use hardcoded data. Next steps:

1. **Update page components** to fetch from Sanity instead of local constants
2. **Replace ROUTES constant** with Sanity query
3. **Replace component content** with Sanity fields

Example pattern for a page component:

```tsx
// OLD: Import hardcoded data
import { ROUTES } from '@/lib/routesData'

// NEW: Import Sanity client
import { sanityFetch } from '@/sanity/sanity.client'

export default async function RoutesPage() {
  // Fetch from Sanity
  const routesPage = await sanityFetch({
    query: `*[_type == "routesPage"][0]`,
    revalidate: 3600, // 1 hour ISR
  })
  
  const routes = await sanityFetch({
    query: `*[_type == "route" && isActive] | order(displayOrder)`,
    revalidate: 3600,
  })
  
  return (
    <div>
      <h1>{routesPage.pageHeading}</h1>
      {/* Render routes from Sanity */}
    </div>
  )
}
```

---

## 🎨 Customizing Schemas

Schemas are defined in `sanity/schemas/`. To add new fields to a content type:

1. Open the schema file (e.g., `sanity/schemas/homePage.ts`)
2. Add a new field using `defineField()`
3. Restart dev server
4. New field appears in Studio

Example:

```ts
defineField({
  name: 'newField',
  title: 'New Field Label',
  type: 'string', // or 'text', 'number', 'image', etc.
  description: 'Help text for editors',
})
```

---

## 🖼️ Working with Images

Images in Sanity are stored in Sanity's CDN and accessed via the `urlForImage` utility:

```tsx
import { urlForImage } from '@/sanity/sanity.image'

const imageUrl = urlForImage(imageField)
// Returns optimized Sanity image URL
```

When uploading images in Studio, use the **Media plugin** (already configured) for easier asset management.

---

## 🚀 Deployment

### Before Deploying:

1. Ensure all env vars are set in Vercel project settings
2. Verify `SANITY_API_WRITE_TOKEN` is NOT exposed (only used server-side)
3. Use `SANITY_API_READ_TOKEN` for client-side reads (if needed)

### ISR Revalidation:

The seeding script sets revalidation to **1 hour** by default:

```ts
revalidate: 3600 // 1 hour
```

To revalidate on-demand after editing in Studio, implement a webhook in your Sanity project that calls your Next.js revalidation endpoint.

---

## 🐛 Troubleshooting

### Studio won't load at `/studio`

- Check that environment variables are set
- Verify `token` in `sanity/sanity.client.ts` has appropriate permissions
- Check browser console for CORS or auth errors

### Seed script fails

- Ensure `SANITY_API_WRITE_TOKEN` is set and has write permissions
- Verify project ID and dataset name are correct
- Check that Sanity project hasn't rate-limited the API

### Content not appearing on website

- Fetch queries might be using wrong document `_id`
- Check GROQ query syntax in page components
- Verify ISR revalidation time has passed

---

## 📚 Useful Resources

- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Query Reference**: https://www.sanity.io/docs/groq
- **Next.js Integration**: https://www.sanity.io/docs/getting-started-with-next-js
- **Sanity CLI**: https://www.sanity.io/docs/cli

---

## 🎯 Next Steps

1. ✅ Run `npm run seed` to populate Sanity
2. ✅ Access Sanity Studio at `/studio`
3. ✅ Edit and test content changes
4. ⏳ Update frontend pages to fetch from Sanity (see "Connecting Pages" above)
5. ⏳ Deploy to Vercel
6. ⏳ Set up Sanity webhooks for on-demand ISR revalidation

---

**Questions?** Check your Sanity project dashboard or refer to the official Sanity documentation.
