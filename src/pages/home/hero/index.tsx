import Wrapper, { Heading, Image, Visitor } from "./style";

export default function Hero(props: { setVisitor: (name: string) => void }) {
  return (
    <Wrapper id="hero">
      <Image src="images/logo.svg" alt="Site logo" />

      <Heading>
        <div>
          howdy{" "}
          <Visitor
            tabIndex={0}
            contentEditable
            title="Enter your name"
            placeholder="stranger...?"
            suppressContentEditableWarning
            onBlur={(e) => props.setVisitor(e.target.innerText?.trim())}
          />
          !
        </div>
        <div>
          while I have your attention, let us know each
          other {":)"}
        </div>
      </Heading>
    </Wrapper>
  );
}
