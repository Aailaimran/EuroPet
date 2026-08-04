import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',

  __experimental_actions: ['update', 'publish'],

  groups: [
    { name: 'hero', title: '🎯 Hero Section' },
    { name: 'about', title: '📖 About Section' },
    { name: 'vehicle', title: '🚐 Vehicle Section' },
    { name: 'manifesto', title: '✅ Our Promises' },
    { name: 'seo', title: '🔍 SEO Settings' },
  ],

  fields: [
    // HERO GROUP
    defineField({
      name: 'heroHeadlineLine1',
      title: 'Main Headline — Line 1 (white)',
      type: 'string',
      group: 'hero',
      description: 'First line of the big headline on the home page. Currently: "Your dog is family."',
    }),
    defineField({
      name: 'heroHeadlineLine2',
      title: 'Main Headline — Line 2 (gold)',
      type: 'string',
      group: 'hero',
      description: 'Second line shown in gold. Currently: "Every journey treats it that way."',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Introduction Text',
      type: 'text',
      rows: 3,
      group: 'hero',
      description: 'The short paragraph below the main headline explaining the business.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Photo',
      type: 'image',
      group: 'hero',
      description: 'The main photo shown on the right side of the home page. Best size: 800x600px or larger.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'heroBadgeText',
      title: 'Hero Image Badge Text',
      type: 'string',
      group: 'hero',
      description: 'Small text badge shown on the hero photo. Currently: "Safe & Comfortable"',
    }),

    // ABOUT/FOUNDER GROUP
    defineField({
      name: 'founderQuote',
      title: 'Founder Quote (shown on home page)',
      type: 'text',
      rows: 2,
      group: 'about',
      description: 'Short quote from David shown below the hero section. Appears in italic with a gold border.',
    }),

    // VEHICLE GROUP
    defineField({
      name: 'vehicleSectionTitle',
      title: 'Vehicle Section Heading',
      type: 'string',
      group: 'vehicle',
      description: 'Heading above the vehicle photo section.',
    }),
    defineField({
      name: 'vehicleDescription',
      title: 'Vehicle Description',
      type: 'text',
      rows: 3,
      group: 'vehicle',
      description: 'Short paragraph describing the transport vehicle.',
    }),
    defineField({
      name: 'vehicleImage',
      title: 'Vehicle Photo',
      type: 'image',
      group: 'vehicle',
      description: 'Photo of the Euro Pet Express transport vehicle. Best size: 600x400px.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'vehicleImageCaption',
      title: 'Vehicle Photo Caption',
      type: 'string',
      group: 'vehicle',
      description: 'Small caption shown below the vehicle photo.',
    }),
    defineField({
      name: 'vehicleFeatures',
      title: 'Vehicle Features List',
      type: 'array',
      group: 'vehicle',
      description: 'The tick-list of vehicle features. Add, remove or edit items.',
      of: [{ type: 'string' }],
    }),

    // SEO GROUP
    defineField({
      name: 'seoTitle',
      title: 'Page Title (shown in browser tab)',
      type: 'string',
      group: 'seo',
      description: 'Keep under 60 characters for best Google results.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Page Description (for Google)',
      type: 'text',
      rows: 2,
      group: 'seo',
      description: 'The description Google shows in search results. Keep under 160 characters.',
    }),
  ],

  preview: {
    prepare() {
      return {
        title: 'Home Page Content',
        subtitle: 'Hero, vehicle section, founder quote',
      }
    },
  },
})
