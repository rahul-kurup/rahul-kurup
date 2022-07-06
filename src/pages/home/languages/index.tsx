import { languages } from './constants';
import Wrapper, { Info, Skills } from './style';

function getRating(rating: number, match: number) {
  return (rating === match || rating === -1) && '✓';
}

export default function Languages() {
  return (
    <Wrapper forwardedAs='section' tiltDegree={-4} id='languages'>
      <Info>
        <h4>Languages &amp; Tech I Know</h4>
        <p>
          I&apos;m bilingual, and talk in many languages and <i>languages</i>
        </p>
        <Skills>
          <thead>
            <tr>
              <th>
                LAN<i>guage</i>
              </th>
              <th>Mini</th>
              <th>Pro</th>
              <th>Pro Max</th>
            </tr>
          </thead>
          <tbody>
            {languages.map(([lang, rating]) => (
              <tr key={lang}>
                <td>{lang}</td>
                <td>{getRating(rating, 1)}</td>
                <td>{getRating(rating, 2)}</td>
                <td>{getRating(rating, 3)}</td>
              </tr>
            ))}
          </tbody>
        </Skills>
      </Info>
    </Wrapper>
  );
}
