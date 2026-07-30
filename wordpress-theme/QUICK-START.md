# EuroPet Express WordPress Theme - Quick Start Guide

## Installation (3 Steps - 5 Minutes)

### Step 1: Upload Theme
1. Download theme ZIP from GitHub
2. WordPress Admin → Appearance → Themes → Add New
3. Click "Upload Theme"
4. Select the theme ZIP file
5. Click "Install Now"

### Step 2: Activate Theme
1. Once installed, click "Activate"
2. Wait 10-15 seconds for all CSS/JS to load
3. Go to your site's homepage

### Step 3: Create Basic Pages
Navigate to: Pages → Add New

Create these pages (copy-paste content from CONTENT-MIGRATION.md):
- **Home** (set as front page)
- **About Us** (slug: `about`)
- **Services** (slug: `services`)
- **Routes** (slug: `routes`)
- **Rescue a Dog** (slug: `rescue`)
- **Contact** (slug: `contact`)
- **Compliance** (slug: `compliance`)
- **Privacy Policy** (slug: `privacy`)

## Configuration (5 Minutes)

### Set Front Page
1. Settings → Reading
2. Select "A static page"
3. Homepage: Select "Home"
4. Click "Save Changes"

### Create Navigation Menu
1. Appearance → Menus
2. Create new menu called "Main Navigation"
3. Add these pages in order:
   - Home
   - About Us
   - Services
   - Routes
   - Rescue a Dog
   - Contact
   - Compliance
4. Under "Display location", check "Primary Navigation"
5. Click "Save Menu"

### Add Site Logo
1. Appearance → Customize
2. Click "Site Identity"
3. Upload logo (use /wordpress-theme/assets/images/Logo.png)
4. Click "Publish"

### Configure Forms
All forms work automatically. To customize:

**Email Recipients:**
- Settings → General → Admin Email Address (where form submissions go)

**Contact Form:**
- Page: Contact
- Sends to: Admin email
- Auto-reply to user ✓

**Quote Form:**
- Page: Services
- Sends to: Admin email
- Auto-reply to user ✓

**Rescue Form:**
- Page: Rescue a Dog
- Sends to: Admin email
- Auto-reply to user ✓

### Upload Images (2 Minutes)
1. Media → Add New
2. Upload all images from `/wordpress-theme/assets/images/`
3. Use in pages as needed

## Verify Installation

Check these to confirm perfect installation:

- [ ] Homepage loads with hero section
- [ ] Gold buttons appear with proper styling
- [ ] Navy background colors correct
- [ ] Navigation menu works
- [ ] Forms submit properly
- [ ] Images display correctly
- [ ] Footer shows all links
- [ ] Newsletter form works
- [ ] Social links in footer clickable
- [ ] Mobile responsive layout works

## If Styling Doesn't Appear

1. **Clear Browser Cache**
   - Press Ctrl+Shift+Del (or Cmd+Shift+Del on Mac)
   - Clear all cache
   - Refresh page

2. **Clear WordPress Cache** (if using caching plugin)
   - Settings → Cache plugin → Clear all cache
   - Refresh page

3. **Verify Theme Active**
   - Appearance → Themes
   - Confirm "EuroPet Express" is active

4. **Check CSS in Page Source**
   - View page source (Ctrl+U)
   - Search for "europet-custom.css"
   - Should show in `<head>` section

## Need Help?

If something doesn't work:
1. Check WordPress error logs
2. Deactivate all plugins (except for cache)
3. Switch to default WordPress theme, then back to EuroPet
4. Hard refresh browser (Ctrl+F5)

## You're Live!

Your EuroPet Express website is now live with:
- ✓ Professional design identical to original site
- ✓ All pages created and configured
- ✓ Forms working and sending emails
- ✓ Mobile-responsive layout
- ✓ SEO-friendly structure
- ✓ Fast-loading optimized images

**Total setup time: 15 minutes**
