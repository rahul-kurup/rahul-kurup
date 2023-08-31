import Anchor from '@components/anchor';
import { Props as TimelineProps } from '@components/timeline';
import { Downloads } from './style';

export default [
  {
    company: 'StorageX',
    website: 'https://github.com/rahul-kurup/browser-storage-x#readme',
    designation: 'Author',
    from: '2022',
    techStack: `React, Typescript, Emotion etc`,
    description: [
      <>
        An all-in-one localStorage/sessionStorage/cookie manager browser
        extension for Chrome/Edge/Firefox browser.
        <Downloads>
          <b>Download:</b>

          <Anchor href='https://chrome.google.com/webstore/detail/storagex/pafddkhaocklakonboekmgodcmgmfcbp'>
            Chrome Webstore,
          </Anchor>

          <Anchor href='https://addons.mozilla.org/en-US/firefox/addon/storagex/'>
            Firefox Addons,
          </Anchor>

          <Anchor href='https://microsoftedge.microsoft.com/addons/detail/storagex/gamhkdfigfofibfjhkcamegmckfmnode'>
            Edge Addons
          </Anchor>
        </Downloads>
      </>
    ]
  },
  {
    company: 'OrangeFox Downloads',
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
  },
  {
    company: 'flat-dark VSCode Theme',
    website:
      'https://marketplace.visualstudio.com/items?itemName=RahulKurup.flat-dark',
    designation: 'Author',
    from: '2022',
    techStack: `VSCode, json`,
    description: (
      <>
        A simple flat/dark theme for Microsoft VSCode presented as an extension
        <Downloads>
          <b>Download:</b>

          <Anchor href='https://marketplace.visualstudio.com/items?itemName=RahulKurup.flat-dark'>
            VSCode Marketplace
          </Anchor>
        </Downloads>
      </>
    )
  }
].map((m, id) => ({ ...m, id: id + m.company + m.from })) as (TimelineProps & {
  id: string;
})[];
