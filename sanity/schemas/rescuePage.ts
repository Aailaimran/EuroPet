import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'rescuePage',
  title: 'Rescue a Dog Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({ name: 'pageHeading', title: 'Page Heading', type: 'string' }),
    defineField({ name: 'pageSubheading', title: 'Page Introduction', type: 'text', rows: 2 }),
    defineField({ name: 'missionStatement', title: 'Mission Statement Heading', type: 'string' }),
    defineField({ name: 'missionBody', title: 'Mission Statement Text', type: 'text', rows: 4 }),
    defineField({ name: 'dogsHeading', title: 'Dogs Section Heading', type: 'string' }),
    defineField({ name: 'dogsSubheading', title: 'Dogs Section Introduction', type: 'text', rows: 2 }),
  ],
})
