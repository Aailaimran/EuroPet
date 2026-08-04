# Sanity CMS Integration Setup Guide

## Overview

This guide walks you through setting up Sanity CMS for EuroPet Express. Sanity allows non-technical users to edit website content through a clean dashboard without touching any code.

**What you'll accomplish:**
- Create a Sanity account and project
- Configure authentication credentials
- Deploy the Sanity Studio
- Create initial content documents

---

## Part 1: Create Sanity Account & Project

### Step 1: Sign Up for Sanity
1. Go to **https://sanity.io**
2. Click **"Get started"** or **"Sign up"**
3. Choose **"Sign up with Google"** (easiest) or email
4. No credit card needed — this is free

### Step 2: Create a New Project
1. After signing in, click **"Create new project"**
2. **Project name:** `Euro Pet Express`
3. **Select dataset:** `production` (default)
4. **Pricing plan:** Select the free plan
5. Click **"Create"** and wait 1-2 minutes

### Step 3: Note Your Project ID
1. In your Sanity dashboard, you'll see your **Project ID** in the URL
2. Example URL: `https://sanity.io/manage/abc123xyz`
3. The **Project ID** is the part after `/manage/` (e.g., `abc123xyz`)
4. **Save this somewhere safe** — you'll need it next

---

## Part 2: Get API Credentials

### Step 1: Create API Token
1. In your Sanity dashboard, go to **API** (left sidebar)
2. Click **"Tokens"** tab
3. Click **"Add API token"**
4. **Token name:** `Next.js Read Token`
5. **Permission level:** Select **"Viewer"** (read-only, safest option)
6. Click **"Create token"**
7. Copy the entire token value (long string of characters)
8. **Save this safely** — you won't see it again

---

## Part 3: Add Environment Variables

### Step 1: Update .env.local Locally

1. In your project folder, find or create `.env.local`
2. Add these 4 lines (replace with your actual values):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=sk_abcdefghijklmnopqrstuvwxyz
```

Replace:
- `abc123xyz` with your **Project ID** from Step 3 above
- `sk_abcdefghijklmnopqrstuvwxyz` with your **API token** from Part 2

3. Save the file

### Step 2: Add Environment Variables to Vercel

1. Go to **https://vercel.com/dashboard**
2. Select your **EuroPet Express** project
3. Click **Settings** (top navigation)
4. Click **"Environment Variables"** (left sidebar)
5. Add these 4 variables (one at a time):

**Variable 1:**
- Name: `NEXT_PUBLIC_SANITY_PROJECT_ID`
- Value: `abc123xyz` (your Project ID)
- Add to: Production, Preview, Development

**Variable 2:**
- Name: `NEXT_PUBLIC_SANITY_DATASET`
- Value: `production`
- Add to: Production, Preview, Development

**Variable 3:**
- Name: `NEXT_PUBLIC_SANITY_API_VERSION`
- Value: `2024-01-01`
- Add to: Production, Preview, Development

**Variable 4:**
- Name: `SANITY_API_READ_TOKEN`
- Value: `sk_abcdefghijklmnopqrstuvwxyz` (your API token)
- Add to: Production, Preview, Development

6. Click **Save** after adding each variable

---

## Part 4: Deploy & Test

### Step 1: Redeploy to Vercel
1. Go to **https://vercel.com/dashboard**
2. Select **EuroPet Express** project
3. Go to **Deployments** tab
4. Find the latest deployment
5. Click the **three dots** menu → **Redeploy**
6. Wait 2-3 minutes for deployment to finish

### Step 2: Access Sanity Studio
1. After redeployment, visit: `https://europetexpress.co.uk/studio`
   - (Replace with your actual domain)
2. Log in with your Sanity credentials
3. You should see the content editor with organized sections:
   - 🏠 Home Page
   - 🚐 Transport Routes
   - 🐶 Rescue Dogs
   - ⚙️ Site Settings

---

## Part 5: Create Initial Content

### Step 1: Set Up Site Settings
1. In Sanity Studio, click **"⚙️ Site Settings"**
2. Fill in your business information:
   - Business Name: `Euro Pet Express`
   - Phone Number: Your contact number
   - Email Address: Your contact email
   - WhatsApp Number: Just digits (e.g., `447123456789`)
   - DEFRA Status: (leave as is or update)
   - Logo: Upload your company logo
   - Social media links (optional)
3. Click **Publish**

### Step 2: Update Home Page
1. Click **"🏠 Home Page"**
2. Edit the sections:
   - **Hero Section:** Main headline, subtext, photo, badge
   - **About Section:** Founder quote
   - **Vehicle Section:** Description, photo, features list
   - **SEO Settings:** Page title and meta description
3. Click **Publish**

### Step 3: Create Transport Routes
1. Click **"🚐 Transport Routes"**
2. Click **"Create new"**
3. Add a route:
   - Route Name: (e.g., `UK ↔ Romania`)
   - From Country: `United Kingdom`
   - To Country: `Romania`
   - Country Code: `RO`
   - Departure Frequency: (e.g., `Twice per month`)
   - Short Description: Brief 1-2 sentence description
   - Highlights: Add feature bullet points
4. Click **Publish**
5. Repeat for other routes

### Step 4: Add Rescue Dogs
1. Click **"🐶 Rescue Dogs"**
2. Click **"Create new"**
3. Fill in the dog information:
   - Name: Dog's first name
   - Breed: Breed information
   - Gender: Select Male or Female
   - Age: (e.g., `2 years`)
   - Size: Small, Medium, or Large
   - Location: Current location
   - Photo: Upload a clear photo
   - Story: 3-5 sentence description of the dog
   - Personality traits: Add personality tags
   - Adoption contact: Name, email, phone
   - Status: Available, Reserved, or Adopted
4. Click **Publish**

---

## Part 6: Set Up Webhooks (Optional but Recommended)

Webhooks automatically update your website when content changes in Sanity.

### Step 1: Get Vercel Deploy Hook
1. Go to **https://vercel.com/dashboard**
2. Select **EuroPet Express** project
3. Settings → **Git** (left sidebar)
4. Scroll down to **"Deploy Hooks"**
5. Click **"Create Hook"**
6. **Hook name:** `Sanity Content Update`
7. **Branch:** `main`
8. Click **"Create**
9. Copy the webhook URL (long HTTPS link)

### Step 2: Add Webhook to Sanity
1. In Sanity dashboard, go to **API** → **Webhooks**
2. Click **"Create webhook"**
3. **Event:** Select all checkbox options
4. **URL:** Paste your Vercel deploy hook URL
5. Click **"Create"**

Now whenever you publish content in Sanity, your website automatically rebuilds!

---

## Troubleshooting

### "Cannot find module 'sanity'"
- **Solution:** Run `npm install` in your project directory
- Make sure all packages installed without errors

### Studio shows blank page
- **Solution:** 
  - Check environment variables in Vercel (Settings → Environment Variables)
  - Verify Project ID and API token are correct
  - Redeploy project: Deployments → three dots → Redeploy

### Changes not appearing on website
- **Solution:**
  - Make sure you click **"Publish"** in Sanity Studio
  - Wait 1-3 minutes for ISR cache to revalidate
  - Check browser cache (Ctrl+Shift+Delete)

### Webhook not triggering rebuilds
- **Solution:**
  - Verify webhook URL was copied correctly
  - Check Vercel deployment logs for errors
  - Try manually triggering a redeploy

---

## What's Next?

Now that Sanity is configured:

1. **Frontend Integration** — The next step is updating React components to fetch content from Sanity instead of hardcoded values
2. **Image Optimization** — Sanity images are automatically optimized and responsive
3. **Client Training** — Brief your business owner on using the Studio
4. **Content Migration** — Move existing content into Sanity

---

## Quick Reference

| What | Where |
|------|-------|
| Sanity Dashboard | https://sanity.io/manage/ |
| Studio Editor | https://europetexpress.co.uk/studio |
| Vercel Settings | https://vercel.com/dashboard/[project]/settings |
| API Tokens | https://sanity.io/manage/[project]/api |
| Deploy Hooks | https://vercel.com/dashboard/[project]/settings/git |

---

## Support

If you need help:
- Sanity docs: https://www.sanity.io/docs
- Vercel docs: https://vercel.com/docs
- Contact your developer for Next.js component integration

---

**Status:** ✅ Sanity CMS is now configured and ready for content updates!
