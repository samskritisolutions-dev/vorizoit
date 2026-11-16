import type { CollectionConfig } from 'payload';

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
    defaultColumns: ['author', 'role', 'source', 'order'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'idNumber',
      type: 'text',
      required: true,
      label: 'Slide Number (e.g. 01, 02)',
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      label: 'Testimonial Quote',
    },
    {
      name: 'author',
      type: 'text',
      required: true,
      label: 'Author Name',
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      label: 'Author Role / Company',
    },
    {
      name: 'avatar',
      type: 'text',
      required: true,
      label: 'Avatar Initials (e.g. DK, MV)',
    },
    {
      name: 'source',
      type: 'text',
      required: true,
      label: 'Badge / Source (e.g. CLIENT PERSPECTIVE, TEAM TESTIMONIAL)',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
    },
  ],
};
