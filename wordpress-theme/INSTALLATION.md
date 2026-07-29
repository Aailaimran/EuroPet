# EuroPet Express WordPress Theme - Installation Guide

## What's Included

This complete WordPress theme package contains everything you need to run EuroPet Express on WordPress:

- ✅ Full WordPress theme (PHP, CSS, JavaScript)
- ✅ All optimized images (27MB total, pre-optimized)
- ✅ Contact forms with email notifications
- ✅ Services management system
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Professional styling with gold & navy color scheme
- ✅ 8 core page templates
- ✅ Complete documentation

## Installation Requirements

- WordPress 5.0 or later
- PHP 7.4 or later
- A WordPress hosting account (already set up)
- Administrator access to WordPress dashboard

## Step 1: Download the Theme

The theme folder is located in the project files:
```
/wordpress-theme/
```

You can either:
- **Option A**: Use the tar.gz file (recommended for download)
- **Option B**: Manually select the folder and compress

## Step 2: Upload to WordPress

### Method A: Via WordPress Dashboard (Easiest)

1. Go to your WordPress website's **Dashboard**
2. Navigate to **Appearance → Themes**
3. Click **Add New**
4. Click **Upload Theme**
5. Click **Choose File**
6. Select the theme zip/tar file
7. Click **Install Now**
8. Once installed, click **Activate Theme**

### Method B: Via FTP (For Large Files)

If the upload fails due to file size:

1. Extract the theme folder
2. Connect via FTP to your hosting
3. Navigate to `/wp-content/themes/`
4. Upload the `wordpress-theme` folder
5. In WordPress, go to **Appearance → Themes**
6. Find "EuroPet Express" and click **Activate**

## Step 3: Initial Configuration (5 minutes)

After activation, complete these steps:

### 1. Upload Logo
- **Appearance → Customize → Site Identity**
- Upload logo (300x90px recommended)
- Publish

### 2. Create Main Menu
- **Appearance → Menus → Create New Menu**
- Name: "Main Menu"
- Add: Home, About, Services, Routes, Rescue, Contact, Compliance, Privacy
- Check "Primary Menu" under Display location
- Save

### 3. Create Essential Pages
Create pages with these titles (use default template unless noted):
- **Home** (set as homepage in Settings → Reading)
- **About** (optional template: About Page)
- **Services** (template: Services Page)
- **Routes**
- **Rescue a Dog**
- **Contact** (template: Contact Page)
- **Compliance**
- **Privacy Policy**

### 4. Add Services (Custom Post Type)
- **Services → Add New Service**
- Title: e.g., "Pet Transport UK to EU"
- Content: Service description
- Featured Image: Service photo
- Category: Create/select category
- Publish

Create at least 5-6 services for complete homepage.

### 5. Update Contact Details
Edit `page-contact.php` in **Appearance → File Editor** to update:
- Phone number (line ~90)
- Email address (line ~95)
- WhatsApp link (line ~100)

### 6. Update Social Media Links
Edit `footer.php` in **Appearance → File Editor** (lines ~48-53):
- Facebook URL
- Instagram URL
- YouTube URL
- WhatsApp URL

## Step 4: Testing

Before going live, test:

- ✅ Homepage loads and displays correctly
- ✅ All menu items work
- ✅ Services page shows all services
- ✅ Contact form submits (check email)
- ✅ Mobile responsive (test on phone)
- ✅ Images load properly
- ✅ Footer social links work
- ✅ Page load speed acceptable

Test form submission:
1. Go to Contact page
2. Fill in test form
3. Submit
4. Check email (may be in spam folder)

## Theme Structure

```
wordpress-theme/
├── style.css              # Theme stylesheet & metadata
├── functions.php          # PHP functions & hooks
├── index.php              # Main template
├── header.php             # Header template
├── footer.php             # Footer template
├── page.php               # Default page template
├── front-page.php         # Homepage template
├── page-contact.php       # Contact page template
├── page-services.php      # Services page template
├── single-service.php     # Single service template
├── README.md              # Feature documentation
├── SETUP.md               # Setup instructions
├── assets/
│   ├── css/
│   │   └── custom.css     # Additional styling
│   ├── js/
│   │   └── main.js        # Theme JavaScript
│   └── images/            # All optimized images
└── inc/                   # Additional includes (if used)
```

## Key Features

### Forms
- **Contact Form**: Name, Email, Subject, Message
- Auto-sends to admin email
- AJAX submission (no page reload)
- Form validation

### Pages
- Responsive design on all devices
- Professional typography
- Optimized images
- Clean, modern layout

### Services
- Custom post type
- Categories for organization
- Featured images
- Related services on single page

### Customization
All easily customizable via:
- **Appearance → Customize**: Logo, colors (if using CSS vars)
- **Appearance → Menus**: Navigation links
- **Pages/Posts**: Content management
- **Appearance → File Editor**: Code customization

## Performance

Theme is optimized for:
- **Page Load Speed**: All images pre-optimized
- **Mobile**: Fully responsive design
- **SEO**: Semantic HTML, proper headings, metadata support
- **Accessibility**: WCAG compliant, proper ARIA labels

Typical homepage load time: 1-2 seconds on good hosting

## Security

Theme includes:
- ✅ Nonce verification on forms
- ✅ Input sanitization
- ✅ Proper escaping of output
- ✅ SQL injection prevention
- ✅ CSRF protection

Best practices:
- Keep WordPress updated
- Use strong passwords
- Enable SSL/HTTPS
- Regular backups
- Monitor for vulnerabilities

## Support & Troubleshooting

### Contact Form Not Sending
1. Verify admin email in **Settings → General**
2. Check email spam folder
3. Install "WP Mail SMTP" plugin for debugging
4. Test with WordPress mail checker plugin

### Images Not Showing
1. Check media library for images
2. Verify file permissions (644 for files, 755 for dirs)
3. Try "Regenerate Thumbnails" plugin

### Menu Not Displaying
1. Go to **Appearance → Menus**
2. Verify menu created and assigned to "Primary Menu"
3. Check header.php for correct menu location

### Styling Broken
1. Clear browser cache (Ctrl+Shift+Delete)
2. Clear WordPress cache (if installed)
3. Verify CSS file loading in browser DevTools
4. Check for conflicting plugins

## Next Steps

1. **Customize**: Update branding, colors, content
2. **Test**: Verify all functionality works
3. **Optimize**: Set up caching, CDN, analytics
4. **Launch**: Enable SSL, set meta tags, submit to Google
5. **Maintain**: Regular backups, updates, monitoring

## Contact Support

If you encounter issues:
1. Check README.md for feature details
2. Review SETUP.md for setup steps
3. Check theme troubleshooting section above
4. Contact your WordPress hosting support
5. Visit WordPress.org forums

---

**Theme Version**: 1.0.0  
**Last Updated**: July 2024  
**WordPress Requirements**: 5.0+  
**PHP Requirements**: 7.4+  
**Theme License**: GPL v2 or later

Installation typically takes: **5-15 minutes**
Content setup: **30 minutes - 2 hours** (depending on existing content)
