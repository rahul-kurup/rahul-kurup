import Timeline from '@components/timeline';
import { calculateYears } from '@utils/date';
import { useMemo, useState } from 'react';
import jobsList from './constants';
import Wrapper, { Desc, Info, Work } from './style';

const expertise = calculateYears(new Date(2014, 4));

export default function WorkExperience() {
  const [desc, setDesc] = useState(true);

  const jobs = useMemo(
    () => [...(desc ? jobsList : jobsList.reverse())].map(m => ({ ...m })),
    [desc]
  );

  return (
    <Wrapper forwardedAs='section' tiltDegree={-3} id='work-experience'>
      <Info>
        <h2>All Work, No Play</h2>
        <p>
          I&apos;ve total {expertise.filter(Boolean).join('.')} years of
          experience, so here&apos;s that in{' '}
          <Desc isDesc={desc} onClick={() => setDesc(s => !s)}>
            {desc ? 'descending' : 'ascending'}
          </Desc>{' '}
          order
        </p>
        <Work>
          {jobs.map(m => (
            <Timeline {...m} key={m.id} />
          ))}
        </Work>
      </Info>
    </Wrapper>
  );
}
