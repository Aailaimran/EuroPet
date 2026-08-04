import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'rescueDog',
  title: 'Rescue Dog',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: "Dog's Name",
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breed',
      title: 'Breed',
      type: 'string',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      options: {
        list: [
          { title: 'Female', value: 'Female' },
          { title: 'Male', value: 'Male' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'age',
      title: 'Age',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'Size',
      type: 'string',
      options: {
        list: [
          { title: 'Small', value: 'Small' },
          { title: 'Medium', value: 'Medium' },
          { title: 'Large', value: 'Large' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'location',
      title: 'Current Location',
      type: 'string',
    }),
    defineField({
      name: 'rescueOrganisation',
      title: 'Rescue Organisation',
      type: 'string',
    }),
    defineField({
      name: 'status',
      title: 'Adoption Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'Available' },
          { title: 'Reserved', value: 'Reserved' },
          { title: 'Adopted — Hide from Site', value: 'Adopted' },
        ],
        layout: 'radio',
      },
      initialValue: 'Available',
    }),
    defineField({
      name: 'photo',
      title: 'Dog Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: "Dog's Story",
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'personality',
      title: 'Personality Traits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'goodWithKids',
      title: 'Good with children?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'goodWithDogs',
      title: 'Good with other dogs?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'goodWithCats',
      title: 'Good with cats?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'needsGarden',
      title: 'Needs a garden?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 99,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'status',
      media: 'photo',
    },
    prepare({ title, subtitle, media }) {
      const emoji =
        subtitle === 'Available' ? '🟢' :
        subtitle === 'Reserved' ? '🟡' : '⚫'
      return {
        title: `${emoji} ${title}`,
        subtitle,
        media,
      }
    },
  },
})
