import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'route',
  title: 'Transport Route',
  type: 'document',

  fields: [
    defineField({
      name: 'name',
      title: 'Route Name',
      type: 'string',
      description: 'e.g. "UK ↔ Romania"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Route ID (do not change)',
      type: 'slug',
      description: 'This is used internally by the website. Only change if instructed by your developer.',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'originCountry',
      title: 'From Country',
      type: 'string',
      description: 'e.g. "United Kingdom"',
    }),
    defineField({
      name: 'destinationCountry',
      title: 'To Country',
      type: 'string',
      description: 'e.g. "Romania"',
    }),
    defineField({
      name: 'destinationCode',
      title: 'Country Code (2 letters)',
      type: 'string',
      description: 'Two letter country code for the flag icon. e.g. RO for Romania, RS for Serbia, DE for Germany.',
      validation: (Rule) => Rule.max(2),
    }),
    defineField({
      name: 'departureFrequency',
      title: 'How Often We Depart',
      type: 'string',
      description: 'e.g. "Departures twice per month" or "Weekly departures"',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
      description: 'Brief description shown on the route card. 1-2 sentences.',
    }),
    defineField({
      name: 'isActive',
      title: 'Show this route on website?',
      type: 'boolean',
      description: 'Turn off to hide this route without deleting it.',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number = shown first. e.g. 1 = first, 2 = second, etc.',
    }),
    defineField({
      name: 'routeHighlights',
      title: 'Route Highlights',
      type: 'array',
      description: 'Key features of this route. Add or remove bullet points.',
      of: [{ type: 'string' }],
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'departureFrequency',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Unnamed Route',
        subtitle: subtitle || 'No frequency set',
      }
    },
  },
})
