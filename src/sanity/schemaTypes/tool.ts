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
    defineField({
      name: 'seo',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Title used for search engines and browsers.',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          description: 'Description for search engines.',
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Keywords for search engines.',
        }),
      ],
    }),
  ],
})
