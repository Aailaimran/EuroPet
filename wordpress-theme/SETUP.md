# EuroPet Express Theme - Quick Setup Guide

## Installation Steps

### Step 1: Upload Theme ZIP to WordPress

1. Go to your WordPress Dashboard
2. Navigate to **Appearance → Themes**
3. Click **Add New**
4. Click **Upload Theme**
5. Select the `europet-express-theme.zip` file
6. Click **Install Now**
7. Click **Activate** once installed

## Post-Installation Setup (5-10 minutes)

### Step 2: Upload Site Logo

1. Go to **Appearance → Customize**
2. Click **Site Identity**
3. Click **Logo** and upload your EuroPet Express logo
4. Recommended size: 300x90px
5. Click **Publish**

### Step 3: Create Main Menu

1. Go to **Appearance → Menus**
2. Click **Create a new menu**
3. Name it "Main Menu"
4. Add these items (use page links + posts):
   - **Home** (Homepage URL)
   - **About** (create page)
   - **Services** (create page)
   - **Routes** (create page)
   - **Rescue a Dog** (create page)
   - **Contact** (create page)
   - **Compliance** (create page)
   - **Privacy** (create page)
5. Check "Display location: Primary Menu"
6. Save menu

### Step 4: Create Core Pages

Create these pages with their content:

**1. Home Page (Set as Homepage)**
- Title: Home
- Use default template
- Set as Homepage in Settings → Reading

**2. About Page**
- Title: About Us
- Content: Add your company story, mission, team info
- Add featured image if desired

**3. Services Page**
- Title: Services
- Template: **Services Page** (select from Template dropdown)
- Brief intro about your services

**4. Routes Page**
- Title: Routes
- Content: List of your transportation routes

**5. Rescue Page**
- Title: Rescue a Dog
- Content: How people can support rescue operations

**6. Contact Page**
- Title: Contact
- Template: **Contact Page** (select from Template dropdown)
- Content: Optional intro text

**7. Compliance Page**
- Title: Licensing & Compliance
- Content: Legal, DEFRA, animal welfare information

**8. Privacy Page**
- Title: Privacy Policy
- Content: Your privacy policy text

### Step 5: Add Services (Custom Post Type)

1. Go to **Services** in left menu
2. Click **Add New Service**
3. Fill in:
   - **Title**: Service name (e.g., "Pet Transport UK to EU")
   - **Description**: Details about the service
   - **Featured Image**: Upload a service photo
   - **Category**: Select or create a category (optional)
4. Publish

**Create at least these services:**
- Standard Pet Transport
- Express Pet Transport
- Rescue Operations
- Adoption Support
- Multi-Pet Transport

### Step 6: Configure Contact Settings

1. Go to **Settings → General**
2. Verify "Administration Email Address"
3. All contact forms will send to this email
4. *Optional: Install WP Mail SMTP plugin for reliable email delivery*

### Step 7: Update Social Media Links

Edit footer social links:

1. Go to **Appearance → File Editor**
2. Look for `footer.php` in the right sidebar
3. Find the social links section (around lines 48-53)
4. Replace with your actual URLs:
   - Facebook page
   - Instagram profile
   - YouTube channel
   - WhatsApp group

### Step 8: Update Contact Information

Edit contact details:

1. Go to **Appearance → File Editor**
2. Find `page-contact.php`
3. Update (around lines 88-98):
   - Phone number
   - Email address
   - WhatsApp link

## Verification Checklist

✅ Logo displays in header  
✅ Main menu shows all pages  
✅ Homepage displays hero section  
✅ Services show in Services page  
✅ Contact form works (test submit)  
✅ Footer social links open correctly  
✅ Mobile responsive (test on phone)  
✅ All pages have content  

## Optional: Customizations

### Change Brand Colors

Edit `style.css` (lines 24-30):

```css
:root {
  --navy: #0A1628;        /* Primary color */
  --gold: #C9A84C;        /* Accent color */
  --gold-hover: #b8960c;  /* Hover color */
  --text-dark: #0a0e1a;   /* Text color */
}
```

### Add Blog Posts

1. Go to **Posts → Add New**
2. Create company updates, news, tips
3. They'll show on the blog feed

### Add Testimonials

Create a page for customer testimonials or reviews.

## Troubleshooting

### Contact Form Not Sending
- Check Settings → General → Admin Email
- Test by submitting contact form
- Check email spam folder
- Consider: WP Mail SMTP plugin for reliability

### Menu Not Showing
- Go to Appearance → Menus
- Verify menu exists
- Check "Primary Menu" is selected for display location
- Save again

### Images Not Appearing
- Verify images uploaded to Media
- Check image file names don't have special characters
- Clear browser cache

### Mobile Looks Off
- Clear all caches (plugin cache, browser cache)
- Verify CSS file loaded (check browser DevTools)
- Test on different devices

## Security Tips

1. **Change Admin URL**: Use "WPS Hide Login" plugin
2. **Strong Password**: Use 16+ character passwords
3. **Updates**: Keep WordPress, plugins, theme updated
4. **Backups**: Backup weekly (Updraft Plus plugin)
5. **SSL**: Ensure HTTPS is enabled (ask your host)

## Performance Tips

1. **Image Optimization**: All images already optimized ✅
2. **Caching**: Install WP Super Cache for faster loads
3. **CDN**: Consider Cloudflare for content delivery
4. **Monitor**: Use Google PageSpeed Insights regularly

## Next Steps

1. **Customization**: Update colors, fonts, content as needed
2. **Testing**: Test all pages, forms, links
3. **Launch**: Set up SSL (HTTPS) and go live!
4. **Monitor**: Track performance and user feedback

---

**Need Help?**
- Check README.md for feature details
- WordPress documentation: https://wordpress.org/support/
- Theme support: Contact your hosting provider

**Setup Time**: 5-10 minutes  
**Total Time (including content): 30 minutes - 2 hours**
