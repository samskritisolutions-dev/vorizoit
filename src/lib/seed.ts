import type { Payload } from 'payload';

export async function seedInitialContent(payload: Payload) {
  try {
    // Check if Testimonials already exist
    const existingTestimonials = await payload.find({
      collection: 'testimonials',
      limit: 1,
    });

    if (existingTestimonials.totalDocs === 0) {
      console.log('Seeding initial testimonials...');
      const testimonials = [
        {
          idNumber: '01',
          quote:
            'My experience has been both professionally enriching and personally fulfilling. The company fosters a collaborative work environment that encourages innovation, continuous learning, and growth.',
          author: 'Dinesh Kumar',
          role: 'Vorizo Team Member',
          avatar: 'DK',
          source: 'TEAM TESTIMONIAL',
          order: 1,
        },
        {
          idNumber: '02',
          quote:
            'Vorizo transformed our legacy systems into a resilient, high-throughput cloud environment ahead of schedule. Their engineering squads operated seamlessly as a natural extension of our leadership and core team.',
          author: 'Marcus Vance',
          role: 'VP of Engineering, Apex Global Systems',
          avatar: 'MV',
          source: 'CLIENT PERSPECTIVE',
          order: 2,
        },
        {
          idNumber: '03',
          quote:
            'The clarity and security rigor Vorizo brought to our data governance pipeline was exceptional. Real-time telemetry and clean architecture allowed us to scale across 12 countries with total confidence.',
          author: 'Elena Rostova',
          role: 'Chief Technology Officer, Quantix Health',
          avatar: 'ER',
          source: 'ENTERPRISE PARTNER',
          order: 3,
        },
        {
          idNumber: '04',
          quote:
            'Their US strategy paired with India delivery scale gave us the speed, technical precision, and 24/7 momentum we needed. Vorizo is one of the rare technology partners who truly deliver what they commit to.',
          author: 'David Henderson',
          role: 'Director of Digital Platforms, Meridian Logistics',
          avatar: 'DH',
          source: 'STRATEGIC ALLIANCE',
          order: 4,
        },
      ];

      for (const item of testimonials) {
        await payload.create({
          collection: 'testimonials',
          data: item,
        });
      }
    }

    // Check if Jobs already exist
    const existingJobs = await payload.find({
      collection: 'jobs',
      limit: 1,
    });

    if (existingJobs.totalDocs === 0) {
      console.log('Seeding initial jobs...');
      const jobs = [
        {
          title: 'Software Engineer',
          type: 'ENGINEERING',
          location: 'HYDERABAD / FLEXIBLE',
          desc: 'Build impactful solutions with modern technologies and scalable cloud architectures.',
          applyEmail: 'rakeshm@vorizoit.com',
          active: true,
          order: 1,
        },
        {
          title: 'Frontend Developer',
          type: 'ENGINEERING',
          location: 'HYDERABAD / FLEXIBLE',
          desc: 'Create intuitive, high-performance interfaces and thoughtful digital experiences.',
          applyEmail: 'rakeshm@vorizoit.com',
          active: true,
          order: 2,
        },
        {
          title: 'Backend Developer',
          type: 'ENGINEERING',
          location: 'HYDERABAD / FLEXIBLE',
          desc: 'Develop reliable, resilient systems and microservices that power enterprise products.',
          applyEmail: 'rakeshm@vorizoit.com',
          active: true,
          order: 3,
        },
      ];

      for (const item of jobs) {
        await payload.create({
          collection: 'jobs',
          data: item,
        });
      }
    }

    // Check if Services already exist
    const existingServices = await payload.find({
      collection: 'services',
      limit: 1,
    });

    if (existingServices.totalDocs === 0) {
      console.log('Seeding initial services...');
      const services = [
        {
          number: '01 / BUILD',
          title: 'IT Services',
          kicker: 'ENGINEERING',
          desc: 'Purpose-built technology that solves real business challenges and grows with you.',
          image:
            'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80',
          tags: [
            { tag: 'Web & mobile app development' },
            { tag: 'Cloud deployment & support' },
            { tag: 'Custom software solutions' },
          ],
          order: 1,
        },
        {
          number: '02 / ADVISE',
          title: 'Consulting Services',
          kicker: 'STRATEGY',
          desc: 'Clear direction and practical expertise to help you make confident technology decisions.',
          image:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
          tags: [
            { tag: 'Data strategy & architecture' },
            { tag: 'Business intelligence consulting' },
            { tag: 'Process automation' },
          ],
          order: 2,
        },
        {
          number: '03 / UNDERSTAND',
          title: 'Web-based dashboards',
          kicker: 'VISUALIZATION',
          desc: 'Make your data easier to explore, understand and act on with intuitive dashboards.',
          image:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
          tags: [
            { tag: 'Interactive drill-downs' },
            { tag: 'Millions of rows on hardware' },
            { tag: 'Embeddable & themable' },
          ],
          order: 3,
        },
        {
          number: '04 / OPTIMIZE',
          title: 'Powerful analytics tools',
          kicker: 'INTELLIGENCE',
          desc: 'Turn information into insight with tools designed around the way your teams work.',
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
          tags: [
            { tag: 'Real-time data refresh' },
            { tag: 'Custom filters & export' },
            { tag: 'Team collaboration' },
          ],
          order: 4,
        },
      ];

      for (const item of services) {
        await payload.create({
          collection: 'services',
          data: item,
        });
      }
    }

    // Check if Industries already exist
    const existingIndustries = await payload.find({
      collection: 'industries',
      limit: 1,
    });

    if (existingIndustries.totalDocs === 0) {
      console.log('Seeding initial industries...');
      const industries = [
        {
          number: '01',
          category: 'HEALTHCARE',
          title: 'Healthcare & Life Sciences',
          headline: 'Connected patient care & compliant clinical systems',
          desc: 'HIPAA-ready telehealth platforms, EHR integrations, patient telemetry, and secure cloud infrastructure designed for healthcare providers.',
          tags: [
            { tag: 'HIPAA & FHIR APIs' },
            { tag: 'Patient Portals' },
            { tag: 'Clinical Telemetry' },
          ],
          isAction: false,
          order: 1,
        },
        {
          number: '02',
          category: 'COMMERCE',
          title: 'Retail & Digital Commerce',
          headline: 'High-concurrency storefronts & unified inventory',
          desc: 'Headless commerce architectures, real-time inventory sync across channels, sub-second search engines, and omnichannel checkout workflows.',
          tags: [
            { tag: 'Headless Commerce' },
            { tag: 'Omnichannel POS' },
            { tag: 'Real-Time Catalog' },
          ],
          isAction: false,
          order: 2,
        },
        {
          number: '03',
          category: 'FINTECH',
          title: 'Financial Services & Fintech',
          headline: 'High-assurance transaction rails & compliance',
          desc: 'PCI-DSS compliant payment gateways, automated reconciliation engines, fraud analytics, and bank-grade zero-trust cloud microservices.',
          tags: [
            { tag: 'PCI-DSS & SOC 2' },
            { tag: 'Fraud Detection' },
            { tag: 'Ledger Accounting' },
          ],
          isAction: false,
          order: 3,
        },
        {
          number: '04',
          category: 'INDUSTRY 4.0',
          title: 'Manufacturing & Smart Facilities',
          headline: 'Connected production & predictive factory telemetry',
          desc: 'IIoT sensor telemetry, factory-floor dashboards, predictive maintenance monitoring, and seamless ERP/supply-chain synchronization.',
          tags: [
            { tag: 'IIoT Telemetry' },
            { tag: 'Predictive Alerts' },
            { tag: 'ERP Integration' },
          ],
          isAction: false,
          order: 4,
        },
        {
          number: '05',
          category: 'HOSPITALITY',
          title: 'Hospitality & Travel',
          headline: 'Frictionless guest journeys & reservation engines',
          desc: 'Direct reservation engines, keyless mobile check-in APIs, multi-property management dashboards, and automated guest communication channels.',
          tags: [
            { tag: 'Smart Reservations' },
            { tag: 'Mobile Check-In' },
            { tag: 'Property Ops' },
          ],
          isAction: false,
          order: 5,
        },
        {
          number: '06',
          category: 'CUSTOM VENTURES',
          title: 'Custom Enterprise Domains',
          headline: 'Tailored software for complex domain challenges',
          desc: 'Have a proprietary workflow or niche industry model? We engineer dedicated custom software platforms from architecture spike to full enterprise production.',
          tags: [
            { tag: 'Proprietary SaaS' },
            { tag: 'Cloud Native' },
            { tag: 'Legacy Modernization' },
          ],
          isAction: true,
          order: 6,
        },
      ];

      for (const item of industries) {
        await payload.create({
          collection: 'industries',
          data: item,
        });
      }
    }

    // Check if FAQs already exist
    const existingFaqs = await payload.find({
      collection: 'faqs',
      limit: 1,
    });

    if (existingFaqs.totalDocs === 0) {
      console.log('Seeding initial FAQs...');
      const faqs = [
        {
          question: 'What IT services do you offer?',
          answer:
            'Our services include web and mobile app development, cloud deployment and support, custom software solutions, consulting, data strategy, business intelligence and process automation.',
          category: 'Services',
          order: 1,
        },
        {
          question: 'Do you provide consulting for digital transformation?',
          answer:
            'Yes. Our consulting services include data strategy and architecture, business intelligence consulting and process automation to help organizations make informed technology decisions.',
          category: 'Consulting',
          order: 2,
        },
        {
          question: 'Can your solutions integrate with existing tools and systems?',
          answer:
            'We build tailored solutions with your existing technology environment and business requirements in mind. Share your current systems with our team so we can discuss integration needs.',
          category: 'Integration',
          order: 3,
        },
        {
          question: 'Can I customize analytics tools to match my business goals?',
          answer:
            'Yes. Our analytics tools support custom filters, exports, real-time data refresh and team collaboration, with dashboards designed around your workflows.',
          category: 'Analytics',
          order: 4,
        },
        {
          question: 'How long does it take to set up a web-based dashboard?',
          answer:
            'Timing depends on data sources, complexity, integrations and the features you need. Contact us to discuss your requirements and a practical delivery plan.',
          category: 'Delivery',
          order: 5,
        },
      ];

      for (const item of faqs) {
        await payload.create({
          collection: 'faqs',
          data: item,
        });
      }
    }

    // Check and seed Site Settings
    try {
      await payload.updateGlobal({
        slug: 'site-settings',
        data: {
          announcementText: 'Building what’s next, together',
          announcementRight: 'US · INDIA · GLOBAL DELIVERY',
          heroHeadline: 'Ideas into',
          heroHeadlineAccent: 'impact.',
          heroIntro:
            'We build and manage modern IT systems with precision — delivering clear solutions, intuitive experiences and real outcomes for ambitious businesses.',
          heroSlides: [
            {
              title: 'Enterprise Architecture & Cloud Delivery',
              image:
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
            },
            {
              title: 'Collaborative Engineering Teams',
              image:
                'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80',
            },
            {
              title: 'Modern High-Throughput Infrastructure',
              image:
                'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80',
            },
          ],
          aboutLead: 'We’re a technology partner focused on making complex things feel simple.',
          aboutBody1:
            'Established in 2021, Vorizo Info Tech is a women-owned technology organization headquartered in the United States, with operations across the US and India. We bring together experienced people, practical thinking and a commitment to doing the work right.',
          aboutBody2:
            'From software development and cloud solutions to cybersecurity, data management, consulting and outsourcing, we help organizations stay future-ready and competitive.',
          aboutImage:
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
          usCity: 'Giddings, Texas',
          usAddress: '1174 E. Austin Street\nGiddings, TX 78942',
          usPhone: '+1 929-323-0199',
          indiaCity: 'Hyderabad, Telangana',
          indiaAddress: 'Plot No. 865, Road No. 42\nUppal Bhag ayath, Hyderabad 500039',
          indiaPhone: '+91 7416702682',
          emailHeading: 'Say hello.',
          emailSubtext: 'For general and business enquiries',
          primaryEmail: 'support@vorizoit.com',
          secondaryEmail: 'support.india@vorizoit.com',
        },
      });
    } catch {
      // Ignored if already initialized
    }
  } catch (err) {
    console.error('Failed to seed initial content:', err);
  }
}
