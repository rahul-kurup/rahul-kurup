import Anchor from "@components/anchor";
import { calculateYears } from "@utils/date";
import Wrapper, { Image, Para, Paras, Info, WrapperMe } from "./style";

const [ageInYears] = calculateYears();

export default function Me({ visitor }: { visitor: string }) {
  return (
    <Wrapper forwardedAs="section" tiltDegree={3} id="me">
      <Info>
        <h1>
          {visitor ? (
            <>
              Hi <u>{visitor}</u>
            </>
          ) : (
            `Though I didn't get your name before`
          )}
          , lemme introduce myself
        </h1>
        <WrapperMe>
          <Paras>
            <Para>
              {visitor ? "My" : "Hi, my"} name is <b>Rahul Kurup</b> and
              I&apos;m {ageInYears} years old. I&apos;m a full-stack developer
              and a part-time husband {";)"}. Professionally I captain frontend
              development, but I&apos;m well versed in backend
              as well, ie; MERN/MEAN, Loopback, and all those jargons.
            </Para>

            <Para>
              I code a lot, almost always (even when I&apos;m free); quite
              addicted I would say. When I&apos;m not mashing keyboard for work
              or pleasure, I roam around as{" "}
              <Anchor
                aria-label="Rahul Kurup's Stackoverflow profile"
                href="https://stackoverflow.com/users/6611487/boop-the-snoot?tab=profile"
              >
                boop-the-snoot
              </Anchor>{" "}
              on StackOverflow or contribute to open source softwares, if
              possible.
            </Para>
          </Paras>

          <Image src="images/me.jpeg" alt="Rahul Kurup" />
        </WrapperMe>
      </Info>
    </Wrapper>
  );
}
