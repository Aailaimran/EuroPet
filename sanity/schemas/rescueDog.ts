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
      description: 'First name only. e.g. "Luna"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'breed',
      title: 'Breed',
      type: 'string',
      description: 'e.g. "Romanian Mioritic Mix"',
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
      description: 'e.g. "2 years" or "18 months"',
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
      description: 'Where is the dog now? e.g. "Bucharest, Romania"',
    }),
    defineField({
      name: 'rescueOrganisation',
      title: 'Rescue Organisation',
      type: 'string',
      description: 'Name of the rescue charity caring for this dog.',
    }),
    defineField({
      name: 'status',
      title: 'Adoption Status',
      type: 'string',
      options: {
        list: [
          { 
            title: 'Available for Adoption', 
            value: 'Available' 
          },
          { 
            title: 'Reserved', 
            value: 'Reserved' 
          },
          { 
            title: 'Adopted — Hide from Site', 
            value: 'Adopted' 
          },
        ],
        layout: 'radio',
      },
      initialValue: 'Available',
    }),
    defineField({
      name: 'photo',
      title: 'Dog Photo',
      type: 'image',
      description: 'Clear photo of the dog. Square or landscape works best. At least 600x400px.',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: "Dog's Story",
      type: 'text',
      rows: 4,
      description: "Write a short, warm description of this dog's personality and background. 3-5 sentences.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'personality',
      title: 'Personality Traits',
      type: 'array',
      description: 'Short personality tags. e.g. "Gentle and affectionate", "Loves outdoor walks"',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'adoptionContactName',
      title: 'Contact Person for Adoption',
      type: 'string',
      description: 'Name of the person to contact about adoption.',
    }),
    defineField({
      name: 'adoptionContactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'Email address for adoption inquiries.',
    }),
    defineField({
      name: 'adoptionContactPhone',
      title: 'Contact Phone',
      type: 'string',
      description: 'Phone number for adoption inquiries.',
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'breed',
      media: 'photo',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Unnamed Dog',
        subtitle: subtitle || 'No breed specified',
        media: media,
      }
    },
  },
})
