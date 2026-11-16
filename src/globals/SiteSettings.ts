import type { GlobalConfig } from 'payload';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Announcement & Hero',
          fields: [
            {
              name: 'announcementText',
              type: 'text',
              defaultValue: 'Building what’s next, together',
              label: 'Announcement Text',
            },
            {
              name: 'announcementRight',
              type: 'text',
              defaultValue: 'US · INDIA · GLOBAL DELIVERY',
              label: 'Announcement Right Pill',
            },
            {
              name: 'heroHeadline',
              type: 'text',
              defaultValue: 'Ideas into',
              label: 'Hero Main Headline',
            },
            {
              name: 'heroHeadlineAccent',
              type: 'text',
              defaultValue: 'impact.',
              label: 'Hero Accent Headline (Italic)',
            },
            {
              name: 'heroIntro',
              type: 'textarea',
              defaultValue:
                'We build and manage modern IT systems with precision — delivering clear solutions, intuitive experiences and real outcomes for ambitious businesses.',
              label: 'Hero Intro Paragraph',
            },
            {
              name: 'heroSlides',
              type: 'array',
              label: 'Hero Background Slideshow Images',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'text',
                  required: true,
                  label: 'Image URL',
                },
              ],
            },
          ],
        },
        {
          label: 'About Section',
          fields: [
            {
              name: 'aboutLead',
              type: 'textarea',
              defaultValue:
                'We’re a technology partner focused on making complex things feel simple.',
              label: 'Lead Text',
            },
            {
              name: 'aboutBody1',
              type: 'textarea',
              defaultValue:
                'Established in 2021, Vorizo Info Tech is a women-owned technology organization headquartered in the United States, with operations across the US and India. We bring together experienced people, practical thinking and a commitment to doing the work right.',
              label: 'Paragraph 1',
            },
            {
              name: 'aboutBody2',
              type: 'textarea',
              defaultValue:
                'From software development and cloud solutions to cybersecurity, data management, consulting and outsourcing, we help organizations stay future-ready and competitive.',
              label: 'Paragraph 2',
            },
            {
              name: 'aboutImage',
              type: 'text',
              defaultValue:
                'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
              label: 'Team Image URL',
            },
          ],
        },
        {
          label: 'Contact Info',
          fields: [
            // US Office
            {
              name: 'usCity',
              type: 'text',
              defaultValue: 'Giddings, Texas',
              label: 'US City Title',
            },
            {
              name: 'usAddress',
              type: 'textarea',
              defaultValue: '1174 E. Austin Street\nGiddings, TX 78942',
              label: 'US Address',
            },
            {
              name: 'usPhone',
              type: 'text',
              defaultValue: '+1 929-323-0199',
              label: 'US Phone Number',
            },
            // India Office
            {
              name: 'indiaCity',
              type: 'text',
              defaultValue: 'Hyderabad, Telangana',
              label: 'India City Title',
            },
            {
              name: 'indiaAddress',
              type: 'textarea',
              defaultValue: 'Plot No. 865, Road No. 42\nUppal Bhag ayath, Hyderabad 500039',
              label: 'India Address',
            },
            {
              name: 'indiaPhone',
              type: 'text',
              defaultValue: '+91 7416702682',
              label: 'India Phone Number',
            },
            // Email Enquiries
            {
              name: 'emailHeading',
              type: 'text',
              defaultValue: 'Say hello.',
              label: 'Email Section Heading',
            },
            {
              name: 'emailSubtext',
              type: 'text',
              defaultValue: 'For general and business enquiries',
              label: 'Email Subtext',
            },
            {
              name: 'primaryEmail',
              type: 'text',
              defaultValue: 'support@vorizoit.com',
              label: 'General Enquiries Email',
            },
            {
              name: 'secondaryEmail',
              type: 'text',
              defaultValue: 'support.india@vorizoit.com',
              label: 'India Support Email',
            },
          ],
        },
      ],
    },
  ],
};
