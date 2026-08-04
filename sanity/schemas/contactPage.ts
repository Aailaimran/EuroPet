import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact / Quote Page',
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
      type: 'string',
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message Heading',
      type: 'string',
    }),
    defineField({
      name: 'successSubtext',
      title: 'Success Message Body',
      type: 'text',
      rows: 3,
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
