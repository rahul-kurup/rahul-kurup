import Timeline, { Props as TimelineProps } from "@components/timeline";
import { calculateYears } from "@utils/date";
import { useMemo, useState } from "react";
import Wrapper, { Info, Work } from "./style";

const expertise = calculateYears(new Date(2014, 4));

const jobs = [
  {
    company: "Getir",
    designation: "Senior Software Engineer",
    from: "Mar 2022",
    techStack: "React, Node.js, Typescript, Redux etc.",
    description: "Franchise and admin panel management to help businesses",
  },
  {
    company: "Chegg",
    designation: "Senior Software Engineer",
    from: "Jul 2020",
    to: "Mar 2022",
    techStack: "React, Nextjs, Typescript, Figma, Contentful, Node.js etc.",
    description: `Managing/-ed marketing (SEO) and Legal pages, by converting high-traffic pages from 
      PHP to React/Nextjs stack. Also handling/-ed 3-4 junior developers in their day-to-day 
      task and helping them out with their tasks.`,
  },
  {
    company: "Nagarro",
    designation: "Associate Lead",
    from: "Dec 2018",
    to: "Jul 2020",
    techStack: "Angular (with SSR), Typescript, Node.js etc",
    description: `I got promoted to Associate Lead from Senior Software Engineer within my work tenure 
    based on the team management, work ethics and progress I maintained in the client 
    project.
    Worked on Revenue Management application for a high-profile client which would cater 
    daily business needs like order management, recurring payments, report generation etc. 
    Had a team of 5-6 members working under me.`,
  },
  {
    company: "R Systems International",
    designation: "Senior Software Developer",
    from: "Apr 2018",
    to: "Dec 2018",
    techStack: "Angular (with SSR), Typescript, C#, ASP.NET Core 2.1 etc",
    description: `Managing an e-card commerce website adding new feature support as per client 
    requirement.`,
  },
  {
    company: "Planetcast Media Services",
    designation: "Senior Software Developer",
    from: "Sep 2016",
    to: "Apr 2018",
    techStack:
      " Angular 4.x, Typescript, WinForms, WPF, C#, ASP.NET Core 2.1 etc",
    description: `Worked on multiple inhouse software tending towards satellite/dish streaming, 
    monitoring, live charts/logs, and timeline management. Managing proper syncing of 
    audio/video/subtitle/logo for each show that would be streamed by the partner channel; 
    along with reading media hardware meta information using MIB.`,
  },
  {
    company: "Cisoft Technologies",
    designation: "Developer and Tester",
    from: "May 2014",
    to: "Aug 2016",
    techStack: "WinForms, ASP.Net, VB.Net, Crystal Report, MSSQL etc",
    description: `Supporting and testing inhouse ERP software that be supplied to multiple schools and 
    colleges. Generating live reports and dynamic timetable; including fees/library/payroll 
    management.`,
  },
].map((m, id) => ({ ...m, id })) as TimelineProps[];

export default function WorkExperience() {
  const [desc, setDesc] = useState(true);

  const _jobs = useMemo(() => (desc ? jobs : jobs.reverse()), [desc]);

  return (
    <Wrapper forwardedAs="section" tiltDegree={-3} id="work-experience">
      <Info>
        <h2>All Work, No Play</h2>
        <p>
          I&apos;ve total {expertise.filter(Boolean).join(".")} years of experience,
          so here&apos;s that in *
          <span role="button" onClick={() => setDesc((s) => !s)}>
            {desc ? "descending" : "ascending"}
          </span>
          * order
        </p>
        <Work>
          {_jobs.map((m, i) => (
            <Timeline {...m} key={i + m.company + m.from} />
          ))}
        </Work>
      </Info>
    </Wrapper>
  );
}
