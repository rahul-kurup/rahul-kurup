import { CopyUrlFragment } from '@components/copy';
import Timeline from '@components/timeline';
import projects from './helpers';
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
          {projects.map(m => (
            <Timeline {...m} key={m.id} />
          ))}
        </Contributions>
      </Info>
    </Wrapper>
  );
}
