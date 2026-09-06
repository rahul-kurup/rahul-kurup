import { CopyUrlFragment } from '@components/copy';
import { recursive } from '@styles/fonts';
import { languages } from './constants';
import Wrapper, { Info, Skills } from './style';

const id = 'languages';

function getRating(rating: number, match: number): [boolean | string, string] {
  const rate = (rating === match || rating === -1) && '✓';
  return [
    rate,
    rate
      ? match === 1
        ? 'Beginner / learning'
        : match === 2
          ? 'Workable knowledge'
          : 'Expert on this'
      : ''
  ];
}

const ratingHeads = ['Mini', 'Pro', 'Pro Max'];

export default function Languages() {
  return (
    <Wrapper id={id} forwardedAs='section' $tiltDegree={-4}>
      <Info>
        <h4 className={recursive.className}>
          Languages &amp; Tech I Know
          <CopyUrlFragment fragmentId={id} />
        </h4>
        <p>
          I&apos;m bilingual, and talk in many languages and <i>languages</i>
        </p>
        <Skills>
          <thead>
            <tr>
              <th className='name'>
                LAN<i>guage</i>
              </th>
              {ratingHeads.map(m => (
                <th key={m}>{m}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {languages.map(([lang, rating]) => (
              <tr key={lang}>
                <td className='name' title={lang}>
                  {lang}
                </td>
                {ratingHeads.map((_, i) => {
                  const [rate, title] = getRating(rating, i + 1);
                  return (
                    <td key={i} title={title}>
                      {rate}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </Skills>
      </Info>
    </Wrapper>
  );
}
