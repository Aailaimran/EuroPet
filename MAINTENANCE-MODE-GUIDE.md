# Maintenance Mode Guide

## Overview

This document explains how to deploy a maintenance page without affecting your production code on the `main` branch.

**Key Features:**
- ✓ Production code remains untouched on `main` branch
- ✓ Separate `maintenance` branch for downtime
- ✓ Instant switching on Vercel
- ✓ One-click rollback to production

---

## Git Branches

### `main` (Production)
- Contains the full EuroPet Express website
- Fully functional with all components
- URL: https://github.com/Aailaimran/EuroPet/tree/main

### `maintenance` (Maintenance Mode)
- Contains a minimal maintenance page
- No external dependencies or complex components
- URL: https://github.com/Aailaimran/EuroPet/tree/maintenance

---

## Files Modified on `maintenance` Branch

Only these files were changed:
- `app/page.tsx` - Replaced with maintenance page
- `app/layout.tsx` - Simplified (no Navbar, Footer, etc.)

**All other files remain exactly the same as `main`** so you can instantly switch back.

---

## How to Deploy Maintenance Mode

### Step 1: Change Vercel Production Branch

1. Go to **https://vercel.com**
2. Select your **EuroPet Express project**
3. Click **Settings** (top navigation)
4. Go to **Git** (left sidebar)
5. Under **Production Branch**, change from `main` to `maintenance`
6. Click **Save**

### Step 2: Wait for Deployment

- Vercel will automatically build the `maintenance` branch
- Wait for the deployment to complete (1-3 minutes)
- Your site will now show the maintenance page

### Step 3: Verify

- Visit your production domain
- You should see: "Website Temporarily Unavailable"
- The page is responsive and works on mobile

---

## How to Restore Production

### Step 1: Change Vercel Production Branch Back

1. Go to **https://vercel.com**
2. Select your **EuroPet Express project**
3. Click **Settings** → **Git**
4. Under **Production Branch**, change from `maintenance` back to `main`
5. Click **Save**

### Step 2: Wait for Deployment

- Vercel will rebuild the `main` branch
- Wait for deployment to complete
- Your full production website will be live

### Step 3: Verify

- Visit your production domain
- You should see the full EuroPet Express website
- All pages and forms should be working

---

## Git Commands (for reference)

**Switch to maintenance branch locally:**
```bash
git checkout maintenance
```

**Switch back to main:**
```bash
git checkout main
```

**View all branches:**
```bash
git branch -a
```

**Push changes to a branch:**
```bash
git push origin maintenance
# or
git push origin main
```

---

## Maintenance Page Features

**What's displayed:**
- Centered card layout
- "Website Temporarily Unavailable" heading
- Professional message
- Light gradient background
- Responsive design (desktop & mobile)
- Status indicator

**What's NOT displayed:**
- Navigation menu
- Footer
- Complex animations
- External services
- Database calls

---

## Files Checklist

### On `maintenance` Branch
- ✓ `app/page.tsx` - Maintenance homepage
- ✓ `app/layout.tsx` - Simplified layout
- ✓ All other files from `main` (unchanged)

### On `main` Branch
- ✓ All original production files
- ✓ All components intact
- ✓ Database connections active
- ✓ Forms configured

---

## Safety & Rollback

**Why this is safe:**
1. `main` branch is never touched
2. `maintenance` branch is separate
3. Switching is instant on Vercel
4. No code deletion or loss
5. Can rollback in seconds

**Rollback Process:**
1. Vercel Settings → Git
2. Change Production Branch to `main`
3. Save
4. Wait 1-3 minutes
5. Site is back to production

---

## Timeline Example

**Day 1 - Payment Pending:**
- Deploy `maintenance` branch
- Site shows maintenance page
- Customers see: "Temporarily Unavailable"

**Day 2 - Payment Received:**
- Switch to `main` branch
- Site shows full production website
- Customers can access all services

---

## Questions?

If you need to:
- **Update maintenance message**: Edit `app/page.tsx` on `maintenance` branch
- **Add branding**: Modify styles in `app/page.tsx`
- **Change colors**: Update the inline styles in the maintenance component
- **Keep original code safe**: Never commit changes to `main` from `maintenance`

---

## Summary

| Action | Steps |
|--------|-------|
| **Deploy Maintenance** | Vercel Settings → Git → Change to `maintenance` → Save |
| **Restore Production** | Vercel Settings → Git → Change to `main` → Save |
| **View Maintenance Code** | https://github.com/Aailaimran/EuroPet/tree/maintenance |
| **View Production Code** | https://github.com/Aailaimran/EuroPet/tree/main |

Your production code is always safe. Happy deploying!
