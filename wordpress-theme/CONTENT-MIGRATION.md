# EuroPet Express - WordPress Content Migration Guide

## Quick Start: One-Click Content Setup

Your WordPress theme includes all the design. Here's how to populate it with your content in **5 minutes** without manual entry.

---

## Option 1: Automatic Import (Recommended - 2 minutes)

WordPress has a built-in XML importer that will create all your pages automatically.

### Steps:

1. **Log in to WordPress Admin**
2. Go to **Tools → Import**
3. Click **WordPress** (if not installed, install the WordPress Importer plugin first)
4. Upload the included `europet-content-export.xml` file
5. Click **Import**
6. Select your admin user as the post author
7. Click **Submit**

**Result:** All pages, services, and content will be created automatically with proper formatting.

---

## Option 2: Manual Setup (5 minutes)

If the XML importer doesn't work, follow these simple steps:

### Pages to Create:

Copy and paste this content into WordPress:

#### 1. **Home Page**
- Use the default homepage
- The template will auto-populate with featured sections

#### 2. **About Us**
Title: `About Us`

Content:
```
Euro Pet Express was founded by David, a dog transport professional with over a decade of experience who saw that the industry had to be done better.

We built Euro Pet Express on three core principles:
- Welfare First: Your pet's wellbeing is non-negotiable
- Paperwork Right: Full DEFRA compliance, always
- No Corners Cut: Premium service, every journey

Founded in 2023, we operate scheduled routes across Europe, transporting dogs, cats, and small animals between the UK and Europe.

Our mission: To prove there is a better way to transport pets.
```

#### 3. **Services**
Title: `Our Services`

Content:
```
We offer premium pet transport services including:

- Private Owner Transport: Door-to-door transport for your pet
- Rescue & Shelter Transport: Volume discounts for registered rescues
- Breeder Transport: Trusted by registered breeders
- Documentation Assistance: Guidance through UK import rules
- Bespoke Pet Transport: Custom solutions for unique requirements

Each service includes full welfare updates, documentation support, and compliance guarantees.
```

#### 4. **Contact Us**
Title: `Request a Transport Quote`

Content:
```
Get a personalised pet transport quote. We respond within 12–24 hours.

Phone: +44 1524 959304 (Mon–Sat, 8am–8pm)
WhatsApp: https://wa.me/447853147342 (Fastest response)
Email: Info@europetexpress.co.uk

What to expect:
- Regular Photo & Video Updates via WhatsApp
- Live Journey Updates at key stages
- Full Welfare Documentation
- Insurance included
```

#### 5. **Routes**
Title: `Our Routes`

Content:
```
We operate scheduled routes across Europe:

- Romania to UK
- Poland to UK
- Germany to UK
- France to UK
- Serbia to UK

And many more. Contact us to check availability for your route.
```

#### 6. **Rescue & Adoption**
Title: `Rescue a Dog`

Content:
```
We work directly with registered rescue organisations across Europe to transport rehomed pets to their UK foster or forever homes.

We're proud to support:
- Registered rescue organisations
- Animal welfare charities
- Shelter partnerships

Volume discounts available for registered rescues.
```

#### 7. **Compliance & Licensing**
Title: `Licensing & Compliance`

Content:
```
Euro Pet Express operates in full compliance with UK and EU animal welfare regulations.

Standards we maintain:
- DEFRA Type 2 Animal Transport Authorisation (Pending)
- TRACES NT documentation
- Microchip verification
- Health certificate coordination
- Rabies titre test verification
- Insurance coverage

Your pet's safety and legal compliance is guaranteed on every journey.
```

#### 8. **Privacy Policy**
Title: `Privacy Policy`

Content:
```
Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.

Data Collection:
We collect information necessary to process your transport quote including:
- Pet details (name, species, age, health info)
- Your contact information
- Journey details (origin, destination, dates)

Data Protection:
All personal data is processed in accordance with UK GDPR regulations and stored securely.

Contact:
For privacy inquiries, email: Info@europetexpress.co.uk
```

---

## Content Structure in WordPress

After importing/creating pages:

```
Home (Homepage)
├── About Us
├── Services
├── Contact / Request a Quote
├── Routes
├── Rescue & Adoption
├── Compliance & Licensing
└── Privacy Policy
```

All pages will automatically use your theme's beautiful design.

---

## Adding Images

After creating pages:

1. Edit each page in WordPress
2. Click **Add Media** button
3. Upload images from `/wordpress-theme/assets/images/`
4. Drag images into your content

Pre-optimized images available:
- `/assets/images/about/` - Owner and about photos
- `/assets/images/rescue.jpg` - Rescue section
- `/assets/images/assistanceDoc.jpg` - Documentation help image

---

## Adding Services (Optional)

If you want to feature individual services:

1. WordPress Admin → Services → Add New
2. Title: `Private Owner Transport`
3. Content: Copy from the services page above
4. Publish

The theme will automatically display services in the Services page.

---

## Adding Routes (Optional)

To list individual routes:

1. WordPress Admin → Routes → Add New
2. Title: `Romania to UK`
3. Content: `Regular scheduled departures available`
4. Publish

---

## Contact Form & Newsletter

The theme includes pre-built forms for:
- **Contact/Quote Form**: Automatically sends email to Info@europetexpress.co.uk
- **Newsletter Signup**: In footer (admin email required)

To configure:
1. WordPress Admin → Settings → General
2. Update "Admin Email Address" to Info@europetexpress.co.uk
3. Forms will now send to this email

---

## Final Steps

1. ✅ Activate the theme (if not already done)
2. ✅ Create/import pages with content above
3. ✅ Add images to pages
4. ✅ Configure admin email for forms
5. ✅ Test contact form submission
6. ✅ Publish your site!

**Your WordPress site will be live in under 10 minutes.**

---

## Troubleshooting

**Forms not sending emails?**
- Check WordPress Admin Email is correct: Settings → General
- Check spam folder for test emails
- Ensure your hosting allows SMTP

**Pages not using the theme design?**
- Check the page template is set to "Default Template"
- Go to Page → Settings → Template → Select "Default Template"

**Images not showing?**
- Verify images are in `/wordpress-theme/assets/images/`
- Use absolute paths or WordPress media uploader

---

## Support

For questions about your WordPress theme, refer to:
- `README.md` - Feature documentation
- `SETUP.md` - Detailed setup guide
- `INSTALLATION.md` - Installation troubleshooting
