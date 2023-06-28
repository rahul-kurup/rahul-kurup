import { Props as TimelineProps } from '@components/timeline';

export default [
  {
    company: 'Getir',
    website: 'https://getir.com/',
    designation: 'Team Lead',
    from: 'Mar 2022',
    techStack: 'React, Node.js, Typescript, Redux etc.',
    description: `Leading a team of 6 members.
      I mainly work on Franchise and Workforce projects to help Getir business to
      grow in existing markets`
  },
  {
    company: 'Chegg',
    website: 'https://chegg.com/',
    designation: 'Senior Software Engineer',
    from: 'Jul 2020',
    to: 'Mar 2022',
    techStack: 'React, Nextjs, Typescript, Figma, Contentful, Node.js etc.',
    description: `Led a team of 8 members, while managing Marketing (SEO) and Legal pages, by
    converting high-traffic pages from PHP to React/Nextjs stack.`
  },
  {
    company: 'Nagarro',
    website: 'https://www.nagarro.com/en',
    designation: 'Associate Lead',
    from: 'Dec 2018',
    to: 'Jul 2020',
    techStack: 'Angular (with SSR), Typescript, Node.js etc',
    description: `Led a team of 6 members.
    I got promoted to Associate Lead from Senior Software Engineer within my work tenure
    based on the team management, work ethics and progress I maintained in the client
    project.
    Worked on Revenue Management application for a high-profile client which would cater
    daily business needs like order management, recurring payments, report generation etc`
  },
  {
    company: 'R Systems International',
    website: 'https://www.rsystems.com/',
    designation: 'Senior Software Developer',
    from: 'Apr 2018',
    to: 'Dec 2018',
    techStack: 'Angular (with SSR), Typescript, C#, ASP.NET Core 2.1 etc',
    description: `Managing an e-card commerce website adding new feature support as per client
    requirement.`
  },
  {
    company: 'Planetcast Media Services',
    website: 'https://www.planetc.net/',
    designation: 'Software Developer',
    from: 'May 2017',
    to: 'Apr 2018',
    techStack:
      'Angular 4.x, Typescript, WinForms, WPF, C#, ASP.NET Core 2.1 etc',
    description: `Worked on multiple inhouse software tending towards satellite/dish streaming,
    monitoring, live charts/logs, and timeline management. Managing proper syncing of
    audio/video/subtitle/logo for each show that would be streamed by the partner channel;
    along with reading media hardware meta information using MIB.`
  },
  {
    company: 'Richa Industries',
    website: 'https://www.richa.in/',
    dissolved: true,
    designation: 'Software Developer',
    from: 'Sep 2016',
    to: 'Apr 2017',
    techStack: 'WinForms, VB.Net, Crystal Report, MSSQL etc',
    description: `Supporting existing inhouse PEB/Texting software, adding new features and reports`
  },
  {
    company: 'Cisoft Technologies',
    website: 'https://cisoft.co.in/Home/index.php',
    designation: 'Developer and Tester',
    from: 'May 2014',
    to: 'Aug 2016',
    techStack: 'WinForms, ASP.Net, VB.Net, Crystal Report, MSSQL etc',
    description: `Supporting and testing inhouse ERP software that be supplied to multiple schools and
    colleges. Generating live reports and dynamic timetable; including fees/library/payroll
    management.`
  }
].map((m, id) => ({ ...m, id: id + m.company + m.from })) as (TimelineProps & {
  id: string;
})[];
