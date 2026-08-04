# Next Steps — Sanity CMS Setup for Euro Pet Express

## 🎯 Immediate Actions (Do These Now)

### 1. **Run the Seed Script** (5 minutes)

```bash
npm run seed
```

This populates Sanity with all your website content extracted from the codebase. You should see:

```
🌱 Starting Sanity seed script...
✓ Seeding Site Settings...
✓ Seeding Home Page...
✓ Seeding Routes Page...
✓ Seeding Transport Routes...
[... more documents ...]
✅ Seed complete! All content has been pushed to Sanity.
```

### 2. **Start Your Dev Server** (2 minutes)

```bash
npm run dev
```

Then visit:
- **Website**: http://localhost:3000
- **Sanity Studio**: http://localhost:3000/studio

### 3. **Verify Studio Access** (2 minutes)

Open http://localhost:3000/studio and confirm you can see:
- All page singletons populated with content
- 11 transport routes listed
- Settings configured

**If Studio doesn't load**, check:
- `.env.local` has `NEXT_PUBLIC_SANITY_PROJECT_ID` and `SANITY_API_READ_TOKEN`
- Tokens have correct permissions in Sanity project
- No CORS errors in browser console

---

## 📝 Content Editing (You Can Do This Now)

Your content is now live in Sanity Studio. You can immediately:

### **Edit Page Content:**
- Home page headline, subtext, hero image
- About page founder story and FAQs
- Services descriptions
- Contact page messaging

### **Manage Routes:**
- Add/edit/delete transport routes
- Toggle routes active/inactive
- Reorder routes by display order
- Update descriptions and highlights

### **Add Rescue Dogs:**
- Upload dog photos
- Fill in personality traits
- Set adoption status
- Mark compatibility (good with kids, other dogs, cats)

**All changes are saved immediately** and will appear on your website after the next ISR revalidation (up to 1 hour).

---

## 🔄 Connecting Frontend Pages to Sanity (Next Phase)

The website currently still uses hardcoded data. Next step is to update pages to fetch from Sanity.

### Pattern to Follow:

**Example: Routes Page**

**OLD CODE** (`app/routes/page.tsx`):
```tsx
import { ROUTES } from '@/lib/routesData'  // Hardcoded

export default function RoutesPage() {
  const activeRoutes = ROUTES.filter(r => r.isActive)
  return <div>{/* render routes */}</div>
}
```

**NEW CODE**:
```tsx
import { sanityFetch } from '@/sanity/sanity.client'

export default async function RoutesPage() {
  // Fetch from Sanity
  const page = await sanityFetch({
    query: `*[_type == "routesPage"][0]`,
    revalidate: 3600,
  })
  
  const routes = await sanityFetch({
    query: `*[_type == "route" && isActive] | order(displayOrder)`,
    revalidate: 3600,
  })
  
  return (
    <div>
      <h1>{page.pageHeading}</h1>
      <p>{page.pageSubheading}</p>
      <div className="grid">
        {routes.map(route => (
          <div key={route._id}>
            <h3>{route.name}</h3>
            <p>{route.shortDescription}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
```

### Pages to Update (Priority Order):

1. **Routes Page** (`app/routes/page.tsx`) — Fetch from `route` type
2. **Services Page** (`app/services/page.tsx`) — Fetch from `servicesPage`
3. **About Page** (`app/about/page.tsx`) — Fetch from `aboutPage`
4. **Home Page** (`app/page.tsx`) — Fetch from `homePage`
5. **Rescue Page** (`app/rescue/page.tsx`) — Fetch from `rescuePage`
6. **Contact Page** (`app/contact/page.tsx`) — Fetch from `contactPage`
7. **Compliance Page** (`app/compliance/page.tsx`) — Fetch from `compliancePage`

### GROQ Query Reference:

```groq
// Get single page
*[_type == "homePage"][0]

// Get all active routes ordered
*[_type == "route" && isActive] | order(displayOrder)

// Get site settings
*[_type == "siteSettings"][0]

// Get rescue dogs available for adoption
*[_type == "rescueDog" && status == "Available"] | order(displayOrder)

// Get services
*[_type == "servicesPage"][0].services[]
```

---

## 🖼️ Handling Images

Sanity images are stored in Sanity's CDN. Use the helper function:

```tsx
import { urlForImage } from '@/sanity/sanity.image'
import Image from 'next/image'

// In your component:
const imageUrl = urlForImage(doc.image)

<Image 
  src={imageUrl}
  alt="Description"
  width={600}
  height={400}
/>
```

---

## 🚀 Deployment to Vercel

### Before Deploying:

1. **Set Environment Variables in Vercel:**
   - Go to Project Settings → Environment Variables
   - Add all 4 env vars from `.env.local`:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `NEXT_PUBLIC_SANITY_API_VERSION`
     - `SANITY_API_READ_TOKEN`

   ⚠️ **Do NOT commit or expose `SANITY_API_WRITE_TOKEN` to production** — it's only needed for local seeding

2. **Verify ISR Settings:**
   - Default revalidation: 1 hour (3600 seconds)
   - Can be changed in `sanityFetch()` calls

3. **Test Production Build:**
   ```bash
   npm run build
   npm run start
   ```

### Optional: Webhook for Instant Revalidation

When editors publish changes in Sanity, optionally trigger immediate page regeneration:

```tsx
// pages/api/revalidate.ts
export default async function handler(req, res) {
  if (req.query.secret !== process.env.REVALIDATE_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  // Revalidate specific paths
  await res.revalidate('/routes')
  await res.revalidate('/about')
  
  return res.json({ revalidated: true })
}
```

Configure in Sanity project settings → Webhooks to call this endpoint on publish.

---

## 🐛 Troubleshooting

### **Studio won't load**
- Check browser console for errors
- Verify token permissions in Sanity project
- Ensure env vars are correctly set

### **Seed script fails with auth error**
- Verify `SANITY_API_WRITE_TOKEN` is correct
- Check token has write permissions
- Ensure project ID matches

### **Fetch returns undefined**
- Check GROQ query syntax
- Verify document `_type` name matches schema
- Check if document actually exists in Sanity

### **Images not showing**
- Verify image field has data in Sanity
- Check `urlForImage()` is being called
- Ensure Sanity image URL is accessible

### **Changes not appearing on website**
- Wait up to 1 hour for ISR revalidation
- Or manually trigger revalidation via webhook
- Or rebuild/redeploy from Vercel

---

## 📞 Getting Help

- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Guide**: https://www.sanity.io/docs/groq
- **Next.js Sanity Integration**: https://www.sanity.io/docs/getting-started-with-next-js
- **Your Sanity Project**: https://manage.sanity.io/

---

## ✅ Checklist

- [ ] Run `npm run seed`
- [ ] Start dev server with `npm run dev`
- [ ] Access Studio at `/studio` and verify content is populated
- [ ] Edit a piece of content in Studio (e.g., hero headline)
- [ ] Confirm changes reflected on website
- [ ] Update first page component to fetch from Sanity
- [ ] Test production build locally
- [ ] Set env vars in Vercel
- [ ] Deploy to production
- [ ] Monitor Studio for team content edits

---

## 🎉 You're Ready!

Your Sanity CMS integration is complete and functional. Your team can now:
- ✅ Edit all website content in Studio (no coding needed)
- ✅ Manage routes and rescue dogs
- ✅ Update images and text
- ✅ Have changes automatically published

**Start with the seed script, then gradually migrate pages to Sanity queries.**

Questions? Refer to `SANITY_SETUP.md` for detailed guidance.
