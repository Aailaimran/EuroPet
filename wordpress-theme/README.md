# EuroPet Express WordPress Theme

A professional, production-ready WordPress theme for pet transportation and rescue services.

## Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Clean, modern design with gold and navy color scheme
- ✅ Contact form with email notifications
- ✅ Quote request form with AJAX submission
- ✅ Services custom post type (easy to manage)
- ✅ Service categories taxonomy
- ✅ Front page with hero section
- ✅ Services showcase with grid layout
- ✅ Footer with social media links
- ✅ Newsletter subscription
- ✅ SEO optimized
- ✅ WordPress 5.0+ compatible

## Installation

1. Download the theme ZIP file
2. Go to WordPress Dashboard → Appearance → Themes
3. Click "Add New" → "Upload Theme"
4. Select the ZIP file and click "Install Now"
5. Once installed, click "Activate"

## Setup & Configuration

### 1. Set Up Site Logo
- Go to Appearance → Customize → Site Identity
- Upload your logo (recommended size: 300x90px)
- Click "Publish"

### 2. Create Navigation Menu
- Go to Appearance → Menus
- Create a new menu named "Main Menu"
- Add pages/links:
  - Home (use homepage link)
  - About
  - Services
  - Routes
  - Rescue a Dog
  - Contact
  - Compliance
  - Privacy Policy
- Under "Display location," check "Primary Menu"
- Save

### 3. Create Pages

Create the following pages with your content:

- **Home** - Set as Homepage (Settings → Reading → Homepage displays)
- **About** - Use page template "About Page"
- **Services** - Use page template "Services Page"
- **Routes** - Create with your routes content
- **Rescue a Dog** - Rescue adoption information
- **Contact** - Use page template "Contact Page"
- **Compliance** - Legal and compliance information
- **Privacy Policy** - Your privacy policy

### 4. Add Services

- Go to Services in the WordPress menu
- Click "Add New Service"
- Fill in:
  - Service Title
  - Description/Details
  - Featured Image (service photo)
  - Select Service Category if desired
- Publish

Example services to create:
- Pet Transport UK to EU
- Pet Transport EU to UK
- Rescue Operations
- Adoption Support
- Pet Relocation

### 5. Configure Contact Settings

The contact form automatically sends to your site admin email. To change:

1. Go to Settings → General
2. Update "Administration Email Address"
3. All contact form submissions will go to this email

### 6. Customize Colors (Optional)

To change the gold and navy colors, edit the CSS variables in:

`style.css` lines 24-30:

```css
:root {
  --navy: #0A1628;        /* Change this for primary color */
  --gold: #C9A84C;        /* Change this for accent color */
  --gold-hover: #b8960c;  /* Hover state for accent */
  --gold-light: #f0d080;  /* Light accent */
  --text-dark: #0a0e1a;   /* Dark text */
  --text-light: #ffffff;  /* Light text */
}
```

## Page Templates

The theme includes special templates for specific pages:

- **Contact Page** - Named template "Contact Page" - Displays contact form
- **Services Page** - Named template "Services Page" - Displays all services
- **Standard Page** - Default template for regular pages

To assign a template:
1. Edit a page
2. Look for "Template" dropdown on the right side
3. Select the appropriate template
4. Publish

## Forms

### Contact Form
- Name (required)
- Email (required)
- Subject
- Message (required)
- Automatically sends to admin email

### Quote Request Form
- Available on Contact page
- Collects customer quote request details
- Auto-sends to admin

## Customization Tips

### Change Footer Links
Edit `footer.php` lines 30-36 to update footer menu links.

### Update Social Media Links
Edit `footer.php` lines 48-53 with your social media URLs:
- Facebook
- Instagram
- YouTube
- WhatsApp

### Update Contact Information
Edit `page-contact.php` lines 88-98 with your actual contact details:
- Phone number
- Email address
- WhatsApp link

### Add/Remove Sidebar Widgets
Edit `functions.php` lines 54-73 to customize widget areas.

## Image Optimization

All images in the theme are optimized for web:
- About section images: ~5MB total (was 60MB+)
- Van carousel images: ~10MB total
- Rescue/assistance images: ~4MB total

Total theme size: ~27MB (optimized from 116MB)

## Maintenance

### Backup Regularly
- Use a WordPress backup plugin (e.g., Updraft Plus, BackWPup)
- Backup weekly or before major updates

### Keep WordPress Updated
- Always update WordPress core, plugins, and themes
- Test updates on staging site first

### Monitor Performance
- Use Google PageSpeed Insights
- Use GTmetrix for detailed analysis
- Monitor Core Web Vitals

## Troubleshooting

### Contact Form Not Sending
1. Check Settings → General → Admin Email
2. Verify your hosting supports wp_mail()
3. Check spam folder for test emails
4. Consider installing WP Mail SMTP for debugging

### Images Not Displaying
1. Check image paths in files
2. Verify image files exist in `/assets/images/`
3. Regenerate thumbnails (use "Regenerate Thumbnails" plugin)

### Menu Not Showing
1. Go to Appearance → Menus
2. Verify menu exists and is assigned to "Primary Menu"
3. Check header.php for correct menu location

### Styling Looks Broken
1. Clear WordPress cache (if using caching plugin)
2. Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
3. Go to Appearance → Customize and re-publish

## Support & Updates

For issues or feature requests, refer to:
- WordPress.org Theme Directory
- Your hosting provider's support
- WordPress community forums

## License

GPL v2 or later - See LICENSE file for details

## Credits

Developed for EuroPet Express - Professional Pet Transportation & Rescue Services

---

**Version:** 1.0.0  
**Last Updated:** July 2024  
**Requires WordPress:** 5.0+  
**Tested Up To:** 6.4
