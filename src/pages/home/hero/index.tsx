import Logo from '@components/icons/logo';
import Wrapper, { Salutation, Visitor } from './style';

export default function Hero(props: { setVisitor: (name: string) => void }) {
  return (
    <Wrapper id='hero'>
      <Logo />

      <Salutation>
        <div>
          howdy{' '}
          <Visitor
            id='name'
            tabIndex={0}
            role='textbox'
            contentEditable
            title='Enter your name'
            aria-autocomplete='list'
            suppressContentEditableWarning
            onBlur={e => props.setVisitor(e.target.innerText?.trim())}
          />
          !
        </div>

        <div>while I have your attention, let us know each other {':)'}</div>
      </Salutation>
    </Wrapper>
  );
}
