import Anchor from '@components/anchor';
import { CopyUrlFragment } from '@components/copy';
import Timeline from '@components/timeline';
import Wrapper, { Contributions, Info } from './style';

const id = 'open-source';
export default function OpenSource() {
  return (
    <Wrapper id={id} forwardedAs='section' tiltDegree={2}>
      <Info>
        <h3>
          Open-source Contributions
          <CopyUrlFragment fragmentId={id} />
        </h3>
        <p>
          As mentioned earlier, I try contributing to FOSS when I get a chance
        </p>
        <Contributions>
          <Timeline
            from='2019'
            company='OrangeFox'
            website='https://wiki.orangefox.tech/en/home'
            designation='Active maintainer'
            description={
              <>
                I&apos;m actively maintaining{' '}
                <Anchor href='https://orangefox.download'>
                  orangefox.download
                </Anchor>
                . This is a custom recovery application for android enthusiasts.
                Created this project from scratch, added support for download,
                donation contribution, and internalization with the help of
                community translation service.
              </>
            }
            techStack={`React, Nextjs, Typescript, React-Intl, MaterialUI React, Node-Sass, Crowdin etc`}
          />
        </Contributions>
      </Info>
    </Wrapper>
  );
}
