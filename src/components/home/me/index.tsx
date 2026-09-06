import Anchor from '@components/anchor';
import { CopyUrlFragment } from '@components/copy';
import { recursive } from '@styles/fonts';
import { calculateYears } from '@utils/date';
import Wrapper, {
  Image,
  Info,
  Para,
  Paras,
  VisitorName,
  WrapperMe
} from './style';

const id = 'me';
const [ageInYears] = calculateYears();

export default function Me({ visitor }: { visitor: string }) {
  return (
    <Wrapper id={id} forwardedAs='section' $tiltDegree={3}>
      <Info>
        <h1 className={recursive.className}>
          {visitor ? (
            <>
              Hi&nbsp;<VisitorName>{visitor}</VisitorName>
            </>
          ) : (
            `Though I didn't get your name before`
          )}
          , lemme introduce myself
          <CopyUrlFragment fragmentId={id} />
        </h1>
        <WrapperMe>
          <Paras>
            <Para>
              {visitor ? 'My' : 'Hi, my'} name is <b>Rahul Kurup</b> and
              I&apos;m {ageInYears} years old. I&apos;m a full-stack developer
              and a part-time husband {';)'}. Professionally I captain both
              frontend and backend development, while getting my hands dirty
              along the way.
            </Para>

            <Para>
              I have good experience in managing global cross-functioning teams,
              upto 10-15 members each, while keeping deliverables in check!
            </Para>

            <Para>
              I code a lot, almost always (even when I&apos;m free); quite
              addicted I would say. When I&apos;m not mashing keyboard for work
              or pleasure, I roam around as{' '}
              <Anchor
                aria-label="Rahul Kurup's Stackoverflow profile"
                href='https://stackoverflow.com/users/6611487/boop-the-snoot?tab=profile'
              >
                boop-the-snoot
              </Anchor>{' '}
              on StackOverflow or contribute to open source softwares, if
              possible.
            </Para>
          </Paras>

          <Image src='images/me.jpeg' alt='Rahul Kurup' loading='lazy' />
        </WrapperMe>
      </Info>
    </Wrapper>
  );
}
