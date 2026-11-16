import type { CollectionConfig } from 'payload';

export const Jobs: CollectionConfig = {
  slug: 'jobs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'location', 'active'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Job Title',
    },
    {
      name: 'type',
      type: 'text',
      defaultValue: 'ENGINEERING',
      required: true,
      label: 'Department / Category',
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'HYDERABAD / FLEXIBLE',
      required: true,
      label: 'Location',
    },
    {
      name: 'desc',
      type: 'textarea',
      required: true,
      label: 'Short Description',
    },
    {
      name: 'applyEmail',
      type: 'text',
      defaultValue: 'rakeshm@vorizoit.com',
      label: 'Application Email',
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
      label: 'Active / Published',
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
    },
  ],
};
