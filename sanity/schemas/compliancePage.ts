import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'compliancePage',
  title: 'Compliance Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageHeading',
      title: 'Page Heading',
      type: 'string',
    }),
    defineField({
      name: 'pageIntroduction',
      title: 'Page Introduction',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'complianceItems',
      title: 'Compliance Items',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'complianceItem',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 4 },
          ],
          preview: {
            select: { title: 'title' },
          },
        },
      ],
    }),
  ],
})
