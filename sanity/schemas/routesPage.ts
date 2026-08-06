import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'routesPage',
  title: 'Routes Page',
  type: 'document',
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
      name: 'seoTitle',
      title: 'Page Title (browser tab)',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'Page Description (Google)',
      type: 'text',
      rows: 2,
    }),
  ],
})
