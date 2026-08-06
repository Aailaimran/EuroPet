import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Number (digits only)',
      type: 'string',
      description: 'Just digits — e.g. 447853147342',
    }),
    defineField({
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'defraStatus',
      title: 'DEFRA Status Badge Text',
      type: 'string',
      description: 'Shown at top of home page',
    }),
    defineField({
      name: 'responseTime',
      title: 'Typical Response Time',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook Page Link',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram Profile Link',
      type: 'url',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'YouTube Channel Link',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'TikTok Profile Link',
      type: 'url',
    }),
  ],
})
