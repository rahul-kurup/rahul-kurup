export default [
  {
    company: 'BT',
    website: 'https://bt.com/',
    designation: 'Software Engineering Manager',
    from: 'Sep 2023',
    techStack: 'React, Node.js, Next.js, Typescript, Redux etc.',
    description: [
      'Led three teams of up to 15 members and contributed wherever needed.',
      'Redesigned core shopping pages, increasing conversion rates by up to 70% and sales by 60%.',
      'Transitioned from the legacy AMS stack to a modern technology platform.',
      'Conducted A/B tests and adjusted website traffic.',
      'Coordinated cross-team efforts for order management and recommendation/search systems.'
    ]
  },
  {
    company: 'Getir',
    website: 'https://getir.com/',
    designation: 'Technical Lead',
    from: 'Mar 2022',
    to: 'Aug 2023',
    techStack: 'React, Node.js, Typescript, Redux etc.',
    description: [
      'Helped shape a franchise project that improved daily operations across hundreds of warehouses, contributing wherever needed.',
      'Supported a hiring initiative for regional branches to recruit couriers, riders, and store assistants effectively',
      'Played a key role in migrating to a micro-frontend architecture for improved scalability'
    ]
  },
  {
    company: 'Chegg',
    website: 'https://chegg.com/',
    designation: 'Senior Software Engineer',
    from: 'Jul 2020',
    to: 'Mar 2022',
    techStack: 'React, Nextjs, Typescript, Figma, Contentful, Node.js etc.',
    description: [
      `Enhanced chegg.com for millions of students by improving performance, functionality, and accessibility during migration.`,
      `Took charge of developing and guiding Marketing (SEO) and Legal pages, overseeing the migration of high-traffic pages from older
    technology to the latest stack.`,
      `Developed an automated solution for the product team to easily make their own product and landing pages without having to rely
    on engineers.`
    ]
  },
  {
    company: 'Nagarro',
    website: 'https://www.nagarro.com/en',
    designation: 'Associate Lead',
    from: 'Dec 2018',
    to: 'Jul 2020',
    techStack: 'Angular (with SSR), Typescript, Node.js etc',
    description: [
      `Led the development and management of a Revenue Management application tailored for a high-profile client.
    Oversaw the implementation of features satisfying crucial daily business requirements, including order management, recurring
    payments, and report generation`,
      `Delivered a comprehensive solution that effectively streamlined business operations and optimized revenue management processes`
    ]
  },
  {
    company: 'Planetcast Media Services',
    website: 'https://www.planetc.net/',
    designation: 'Software Developer',
    from: 'May 2017',
    to: 'Dec 2018',
    techStack:
      'Angular 4.x, Typescript, WinForms, WPF, C#, ASP.NET Core 2.1 etc',
    description: [
      `Created multiple in-house software applications for satellite/dish streaming, monitoring, live charts/logs, and timeline management.`,
      `Ensured seamless synchronization of audio/video/subtitle/logo for partner channel shows`
    ]
  },
  {
    company: 'Cisoft Technologies',
    website: 'https://cisoft.co.in/Home/index.php',
    designation: 'Developer and Tester',
    from: 'May 2014',
    to: 'Apr 2017',
    techStack: 'WinForms, ASP.Net, VB.Net, Crystal Report, MSSQL etc',
    description: [
      `Contributed to testing and development of in-house ERP software for schools and colleges.`,
      `Automated live reports, dynamic timetables, and management of fees, library, and payroll`
    ]
  }
].map(m => ({ ...m, id: m.company }));
