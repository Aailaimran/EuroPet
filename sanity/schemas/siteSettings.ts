import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  
  __experimental_actions: ['update', 'publish'],
  
  fields: [
    defineField({
      name: 'businessName',
      title: 'Business Name',
      type: 'string',
      description: 'Your company name as it appears across the website',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      description: 'Main contact phone number shown in the header and footer',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      description: 'Just the digits, no spaces or + sign. e.g. 447853147342',
      type: 'string',
    }),
    defineField({
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
      description: 'Main contact email shown on the website',
    }),
    defineField({
      name: 'defraStatus',
      title: 'DEFRA Status Badge',
      type: 'string',
      description: 'Text shown in the DEFRA badge at the top of the home page. e.g. "Pending DEFRA Type 2 Approval — End August 2026"',
    }),
    defineField({
      name: 'responseTime',
      title: 'Typical Response Time',
      type: 'string',
      description: 'Shown below the quote form. e.g. "within 12–24 hours"',
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      description: 'Upload your logo here. Use a PNG with transparent background for best results.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Page Link',
      type: 'url',
      description: 'Your full Facebook page URL',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Profile Link',
      type: 'url',
      description: 'Your full Instagram profile URL',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Channel Link',
      type: 'url',
      description: 'Your YouTube channel URL (leave blank if not ready)',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok Profile Link',
      type: 'url',
      description: 'Your TikTok profile URL (leave blank if not ready)',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Site Settings',
        subtitle: 'Phone, email, logo, social media',
      }
    },
  },
})
