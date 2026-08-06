import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  groups: [
    { name: 'hero', title: '🎯 Hero Section' },
    { name: 'vehicle', title: '🚐 Vehicle Section' },
    { name: 'seo', title: '🔍 SEO' },
  ],
  fields: [
    defineField({
      name: 'heroHeadlineLine1',
      title: 'Main Headline — Line 1 (white text)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroHeadlineLine2',
      title: 'Main Headline — Line 2 (gold text)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Introduction Paragraph',
      type: 'text',
      rows: 3,
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Photo (right side)',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
    }),
    defineField({
      name: 'founderQuote',
      title: 'Founder Quote (shown below buttons)',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'vehicleSectionTitle',
      title: 'Vehicle Section Heading',
      type: 'string',
      group: 'vehicle',
    }),
    defineField({
      name: 'vehicleDescription',
      title: 'Vehicle Description',
      type: 'text',
      rows: 3,
      group: 'vehicle',
    }),
    defineField({
      name: 'vehicleImage',
      title: 'Vehicle Photo',
      type: 'image',
      group: 'vehicle',
      options: { hotspot: true },
    }),
    defineField({
      name: 'vehicleImageCaption',
      title: 'Vehicle Photo Caption',
      type: 'string',
      group: 'vehicle',
    }),
    defineField({
      name: 'vehicleFeatures',
      title: 'Vehicle Feature List',
      type: 'array',
      group: 'vehicle',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'seoTitle',
      title: 'Page Title (browser tab)',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Page Description (Google)',
      type: 'text',
      rows: 2,
      group: 'seo',
    }),
  ],
})
