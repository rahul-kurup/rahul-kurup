import { languages } from './constants';
import Wrapper, { Info, Skills } from './style';

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
                <td>{(rating === 1 || rating === -1) && 'x'}</td>
                <td>{(rating === 2 || rating === -1) && 'x'}</td>
                <td>{(rating === 3 || rating === -1) && 'x'}</td>
              </tr>
            ))}
          </tbody>
        </Skills>
      </Info>
    </Wrapper>
  );
}
