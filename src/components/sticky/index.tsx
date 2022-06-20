import { ComponentPropsWithRef, ReactNode } from "react";
import Wrapper, { Stuck, Unstuck, UnstuckPlacebo } from "./style";

// https://codepen.io/TomAnthony/pen/mdOvJYw
export default function Sticky({
  stuck,
  unstuck,
  ...props
}: {
  stuck: ReactNode;
  unstuck: ReactNode;
} & ComponentPropsWithRef<"div">) {
  return (
    <Wrapper {...props}>
      <Unstuck>
        <UnstuckPlacebo>{stuck}</UnstuckPlacebo>
      </Unstuck>

      <Stuck>{unstuck}</Stuck>
    </Wrapper>
  );
}
