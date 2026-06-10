import { defineField, defineType } from 'sanity';

export const quote = defineType({
  name: 'quote',
  title: 'Quote / testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Quote',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
      description: 'The quote itself, without surrounding quotation marks.',
    }),
    defineField({
      name: 'attribution',
      title: 'Attribution',
      type: 'string',
      description: 'e.g. "Person living with Parkinson’s, 53" or "A.G. · Clinician"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Show on homepage',
      type: 'boolean',
      description: 'The homepage "In their words" section shows the first three featured quotes.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: 'Display order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'text', subtitle: 'attribution' },
  },
});
