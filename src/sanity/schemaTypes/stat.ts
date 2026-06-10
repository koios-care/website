import { defineField, defineType } from 'sanity';

export const stat = defineType({
  name: 'stat',
  title: 'Statistic',
  type: 'document',
  fields: [
    defineField({
      name: 'value',
      title: 'Value',
      type: 'string',
      description: 'e.g. "57%" or "40+"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Short description below the number.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      description: 'Optional link to the source that backs this number.',
    }),
    defineField({
      name: 'sourceQuote',
      title: 'Source quote',
      type: 'text',
      rows: 3,
      description: 'The exact sentence from the source that backs this number.',
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
    select: { title: 'value', subtitle: 'label' },
  },
});
