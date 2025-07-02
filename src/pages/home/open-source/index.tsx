import { CopyUrlFragment } from '@components/copy';
import Timeline from '@components/timeline';
import { recursive } from '@styles/fonts';
import { List } from '../work-experience/style';
import projects from './helpers';
import Wrapper, { Info } from './style';

const id = 'open-source';
export default function OpenSource() {
  return (
    <Wrapper id={id} forwardedAs='section' $tiltDegree={2}>
      <Info>
        <h3 className={recursive.className}>
          Open-source Contributions
          <CopyUrlFragment fragmentId={id} />
        </h3>
        <p>
          As mentioned earlier, I try contributing to FOSS when I get a chance
        </p>
        <List>
          {projects.map(m => (
            <Timeline {...m} key={m.id} />
          ))}
        </List>
      </Info>
    </Wrapper>
  );
}
