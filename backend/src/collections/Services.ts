import type { CollectionConfig } from 'payload';

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['number', 'title', 'kicker', 'order'],
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
      name: 'title',
      type: 'text',
      required: true,
      label: 'Service Title',
    },
    {
      name: 'kicker',
      type: 'text',
      required: true,
      label: 'Badge / Tag (e.g. [ ENGINEERING ])',
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
      label: 'Description',
    },
    {
      name: 'image',
      type: 'text',
      required: true,
      label: 'Image URL',
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Capabilities List',
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
    },
  ],
};
