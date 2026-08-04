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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Route ID',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'destinationCountry',
      title: 'Destination Country',
      type: 'string',
    }),
    defineField({
      name: 'destinationCode',
      title: 'Country Code (2 letters)',
      type: 'string',
      description: 'e.g. RO for Romania, RS for Serbia',
    }),
    defineField({
      name: 'departureFrequency',
      title: 'Departure Frequency',
      type: 'string',
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'routeHighlights',
      title: 'Route Highlights',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isActive',
      title: 'Show on website?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'departureFrequency',
    },
  },
})
