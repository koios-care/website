import { defineField, defineType } from 'sanity';

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'e.g. "2025"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'string',
      description: 'Citation-style author list, e.g. "Iakovakis, D., Hadjidimitriou, S., …"',
    }),
    defineField({
      name: 'source',
      title: 'Source / venue',
      type: 'string',
      description: 'e.g. "Scientific Reports, 8(1), 1-13"',
    }),
    defineField({
      name: 'area',
      title: 'Research area',
      type: 'string',
      description: 'Groups the publication under a research-area filter on /science.',
      options: {
        list: [
          'Parkinson’s disease',
          'Mild cognitive impairment',
          'Depression',
          'Eating behaviour',
          'Orthostatic hypotension',
        ],
      },
    }),
    defineField({
      name: 'citations',
      title: 'Citations',
      type: 'number',
      description: 'Optional citation count (Google Scholar).',
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'One or two sentences on what the work shows.',
    }),
    defineField({
      name: 'url',
      title: 'Link (DOI or publisher page)',
      type: 'url',
      description: 'Optional. When set, the publication title links out.',
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
    select: { title: 'title', subtitle: 'year' },
  },
});
