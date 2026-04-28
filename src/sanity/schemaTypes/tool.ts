import { defineField, defineType } from 'sanity'

export const toolType = defineType({
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Lucide Icon Name',
      type: 'string',
      description: 'The exact name of the Lucide React icon (e.g., Calculator, BriefcaseBusiness, TrendingDown)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: 'Tool Link',
      type: 'url',
      validation: (Rule) => Rule.uri({
        allowRelative: true,
      }),
    }),
  ],
})
