import Wrapper, { Skills, Info } from "./style";

const languages = [
  ["English", "", 3],
  ["Hindi", "", 3],
  ["Malayalam", "", 3],
  ["React", "", 3],
  ["Javascript", "", 3],
  ["TypeScript", "", 3],
  ["Jest", "", 3],
  ["React Testing Library", "", 3],
  ["Next", "", 3],
  ["Node", "", 3],
  ["Redux", "", 3],
  ["HTML", "", 3],
  ["CSS", "", 3],
  ["SCSS/LESS", "", 3],
  ["Angular", "", 3],
  ["Git", "", 3],
  ["Loopback", "", 2],
  ["GraphQL", "", 2],
  ["Tauri", "", 2],
  ["Figma", "", 2],
  ["Contentful", "", 2],
  ["SQL", "", 2],
  ["C#", "", 2],
  ["ASP.Net Core", "", 1],
  ["Vue", "", 1],
  ["Python", "", 1],
  ["Gibberish", "", -1],
];

export default function Languages() {
  return (
    <Wrapper forwardedAs="section" tiltDegree={-4} id="languages">
      <Info>
        <h4>IT Skillset</h4>
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
            {languages.map(([lang, link, rating]) => (
              <tr key={lang}>
                <td>{lang}</td>
                <td>{(rating === 1 || rating === -1) && "x"}</td>
                <td>{(rating === 2 || rating === -1) && "x"}</td>
                <td>{(rating === 3 || rating === -1) && "x"}</td>
              </tr>
            ))}
          </tbody>
        </Skills>
      </Info>
    </Wrapper>
  );
}
