import Anchor from '@components/anchor';
import { Props as TimelineProps } from '@components/timeline';

export default [
  {
    company: 'VisualStudio Marketplace',
    website:
      'https://marketplace.visualstudio.com/items?itemName=RahulKurup.flat-dark',
    designation: 'Author',
    from: '2022',
    techStack: `VSCode, json`,
    description: 'A simple flat/dark theme for Microsoft VSCode presented as an extension'
  },
  {
    company: 'OrangeFox',
    website: 'https://wiki.orangefox.tech/en/home',
    designation: 'Active maintainer',
    from: '2019',
    techStack: `React, Nextjs, Typescript, React-Intl, MaterialUI React, Node-Sass, Crowdin etc`,
    description: (
      <>
        I&apos;m actively maintaining{' '}
        <Anchor href='https://orangefox.download'>orangefox.download</Anchor>.
        This is a custom recovery application for android enthusiasts. Created
        this project from scratch, added support for download, donation
        contribution, and internalization with the help of community translation
        service.
      </>
    )
  }
].map((m, id) => ({ ...m, id: id + m.company + m.from })) as (TimelineProps & {
  id: string;
})[];
