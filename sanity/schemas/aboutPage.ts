import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Us Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'founderName',
      title: "Founder's Name",
      type: 'string',
    }),
    defineField({
      name: 'founderTitle',
      title: "Founder's Job Title",
      type: 'string',
    }),
    defineField({
      name: 'founderPhoto',
      title: "Founder's Photo",
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'founderParagraph1',
      title: 'Founder Story — Paragraph 1',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'founderParagraph2',
      title: 'Founder Story — Paragraph 2',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'founderParagraph3',
      title: 'Founder Story — Paragraph 3',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'founderParagraph4',
      title: 'Founder Story — Key Statement',
      type: 'text',
      rows: 2,
      description: 'This paragraph is shown with a gold border for emphasis.',
    }),
    defineField({
      name: 'founderParagraph5',
      title: 'Founder Story — Final Paragraph',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'faqItems',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 4,
            },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
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
