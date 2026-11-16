import type { CollectionConfig } from 'payload';

export const Faqs: CollectionConfig = {
  slug: 'faqs',
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'category', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
      label: 'Question',
    },
    {
      name: 'answer',
      type: 'textarea',
      required: true,
      label: 'Detailed Answer',
    },
    {
      name: 'category',
      type: 'text',
      defaultValue: 'GENERAL',
      label: 'Category',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
    },
  ],
};
