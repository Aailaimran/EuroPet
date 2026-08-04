import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Our Services Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
    }),
    defineField({
      name: 'pageSubheading',
      title: 'Page Introduction',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'service',
          fields: [
            { name: 'title', title: 'Service Name', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } },
            { name: 'features', title: 'Feature List', type: 'array', of: [{ type: 'string' }] },
            { name: 'isPriceOnApplication', title: 'Price on Application?', type: 'boolean', initialValue: false },
            { name: 'isVisible', title: 'Show on website?', type: 'boolean', initialValue: true },
          ],
          preview: {
            select: { title: 'title', media: 'photo' },
          },
        },
      ],
    }),
  ],
})
