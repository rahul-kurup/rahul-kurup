import { CopyUrlFragment } from '@components/copy';
import Timeline from '@components/timeline';
import { calculateYears } from '@utils/date';
import { useMemo, useState } from 'react';
import jobsList from './helpers';
import Wrapper, { Desc, Info, List } from './style';

const id = 'work-experience';
const expertise = calculateYears(new Date(2013, 0));

export default function WorkExperience() {
  const [desc, setDesc] = useState(true);

  const jobs = useMemo(
    () =>
      [...(desc ? [...jobsList] : [...jobsList].reverse())].map(m => ({
        ...m
      })),
    [desc]
  );

  return (
    <Wrapper id={id} forwardedAs='section' $tiltDegree={-3}>
      <Info>
        <h2>
          All Work, No Play
          <CopyUrlFragment fragmentId={id} />
        </h2>
        <p>
          I&apos;ve total {expertise.filter(Boolean).join('.')} years of
          experience, so here&apos;s that in{' '}
          <Desc $isDesc={desc} onClick={() => setDesc(s => !s)}>
            {desc ? 'descending' : 'ascending'}
          </Desc>{' '}
          order
        </p>
        <List>
          {jobs.map(m => (
            <Timeline {...m} key={m.id} />
          ))}
        </List>
      </Info>
    </Wrapper>
  );
}
