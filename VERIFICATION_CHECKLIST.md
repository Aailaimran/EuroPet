# ✅ Sanity Setup Verification Checklist

Run through this checklist to verify everything is correctly installed.

## Environment & Packages

- [ ] `.env.local` contains `NEXT_PUBLIC_SANITY_PROJECT_ID`
- [ ] `.env.local` contains `NEXT_PUBLIC_SANITY_DATASET`
- [ ] `.env.local` contains `SANITY_API_READ_TOKEN`
- [ ] `.env.local` contains `SANITY_API_WRITE_TOKEN`
- [ ] Run `npm list next-sanity @sanity/client @sanity/image-url sanity @sanity/vision sanity-plugin-media` — all show as installed

## Configuration Files

- [ ] `sanity/sanity.config.ts` exists and contains:
  - [ ] `defineConfig()` with projectId and dataset
  - [ ] Desk tool with all 9 page singletons listed
  - [ ] Vision tool plugin
  - [ ] Media plugin

- [ ] `sanity/sanity.client.ts` exists and contains:
  - [ ] `createClient()` with projectId, dataset, token
  - [ ] `sanityFetch()` helper function with ISR support

- [ ] `sanity/sanity.image.ts` exists and contains:
  - [ ] `urlForImage()` function

## Schemas

Check these files exist in `sanity/schemas/`:

- [ ] `index.ts` — exports all 10 schemas
- [ ] `siteSettings.ts` — Phone, email, social, logo
- [ ] `homePage.ts` — Hero, vehicle, SEO sections
- [ ] `routesPage.ts` — Routes page metadata
- [ ] `route.ts` — Individual transport route
- [ ] `servicesPage.ts` — Services with array of 5
- [ ] `rescuePage.ts` — Rescue program intro
- [ ] `aboutPage.ts` — Founder story, 6 FAQs
- [ ] `compliancePage.ts` — Legal/standards items
- [ ] `contactPage.ts` — Contact form settings
- [ ] `rescueDog.ts` — Individual rescue dog with photo, traits

## Studio Route

- [ ] `app/studio/layout.tsx` exists and sets title
- [ ] `app/studio/[[...index]]/page.tsx` exists and renders `NextStudio`

## Scripts

- [ ] `scripts/seed-sanity.mjs` exists (595 lines)
- [ ] `package.json` has `"seed": "node --env-file-if-exists=.env.local scripts/seed-sanity.mjs"`

## Documentation

- [ ] `SANITY_SETUP.md` — 230+ lines of setup guidance
- [ ] `SANITY_IMPLEMENTATION_SUMMARY.md` — 330+ lines explaining what was built
- [ ] `NEXT_STEPS.md` — 280+ lines with migration path
- [ ] `README_SANITY.md` — 270+ lines quick reference
- [ ] `VERIFICATION_CHECKLIST.md` — This file

## Verification Steps

### 1. Start Development Server
```bash
npm run dev
```
- [ ] No TypeScript errors
- [ ] Dev server starts on port 3000
- [ ] Website loads at http://localhost:3000

### 2. Access Sanity Studio
Open http://localhost:3000/studio
- [ ] Studio loads (may take 10-15 seconds first time)
- [ ] Left sidebar shows all document types
- [ ] Can see desk structure with emoji icons

### 3. Run Seed Script
```bash
npm run seed
```
- [ ] Script runs without errors
- [ ] Creates/updates all 10+ documents
- [ ] Outputs: "✅ Seed complete!"

### 4. Verify Seeded Content
In Studio, check these are populated:
- [ ] Home Page — Hero headlines visible
- [ ] Routes — All 11 routes present
- [ ] Services — 5 services listed
- [ ] About Page — Founder story and FAQs visible
- [ ] Site Settings — Contact info populated

### 5. Edit & Verify
In Studio:
- [ ] Edit home page hero headline
- [ ] Click Publish
- [ ] Wait 30 seconds
- [ ] Refresh website — see change reflected? (or wait up to 1 hour for ISR)

## Common Issues & Solutions

### Issue: "Cannot find module 'next-sanity'"
**Solution:** Run `npm install next-sanity` and check node_modules

### Issue: Studio shows "Project not found"
**Solution:** Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct in `.env.local`

### Issue: Seed script returns 401 error
**Solution:** Verify `SANITY_API_WRITE_TOKEN` has write permissions in Sanity

### Issue: Types missing in IDE
**Solution:** Restart TypeScript server (Cmd/Ctrl + Shift + P → "Reload Window")

### Issue: Studio loads but shows empty desk
**Solution:** Run `npm run seed` to populate content

## Final Checks

- [ ] `npm run build` completes without errors
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] Environment variables are correctly set
- [ ] All file permissions are readable
- [ ] Git status shows new files in sanity/, app/studio/, scripts/, and documentation

## Ready for Production?

- [ ] All items above checked ✓
- [ ] Content successfully seeded ✓
- [ ] Studio loads and displays content ✓
- [ ] Can edit content without errors ✓
- [ ] Website displays seeded content ✓
- [ ] Environment variables ready for Vercel ✓

**You're ready to:**
1. Deploy to Vercel (set env vars in project settings)
2. Connect frontend pages to Sanity queries
3. Set up webhooks for instant ISR revalidation

---

**Questions?** See:
- SANITY_SETUP.md — Detailed setup guide
- NEXT_STEPS.md — What to do next
- README_SANITY.md — Quick reference

**Good luck! 🚀**
