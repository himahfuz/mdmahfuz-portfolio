import { defineField, defineType } from 'sanity'

export const learningType = defineType({
  name: 'learning',
  title: 'Learning Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Accounting', value: 'Accounting' },
          { title: 'Cost Accounting', value: 'Cost Accounting' },
          { title: 'TAX', value: 'TAX' },
          { title: 'VAT', value: 'VAT' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'Published' },
          { title: 'In Progress', value: 'In Progress' },
        ],
      },
      initialValue: 'In Progress',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
  ],
})
