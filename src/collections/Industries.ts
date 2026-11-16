import type { CollectionConfig } from 'payload';

export const Industries: CollectionConfig = {
  slug: 'industries',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['number', 'category', 'title', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'number',
      type: 'text',
      required: true,
      label: 'Number (e.g. 01, 02)',
    },
    {
      name: 'category',
      type: 'text',
      required: true,
      label: 'Sector Category (e.g. HEALTHCARE, COMMERCE)',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Industry Title',
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
      label: 'Headline Subtitle',
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'isAction',
      type: 'checkbox',
      defaultValue: false,
      label: 'Is Action Card (Special Styling)',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
    },
  ],
};
