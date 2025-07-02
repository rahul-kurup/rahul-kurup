import Logo from '@components/icons/logo';
import { recursive } from '@styles/fonts';
import Wrapper, { Salutation, Visitor } from './style';

export default function Hero(props: { setVisitor: (name: string) => void }) {
  return (
    <Wrapper id='hero'>
      <Logo />

      <Salutation className={recursive.className}>
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
            onKeyDown={e => {
              if (e.code.toLowerCase() === 'enter') {
                e.preventDefault();
                props.setVisitor(
                  (e.target as HTMLSpanElement).innerText?.trim()
                );
              }
            }}
          />
          !
        </div>

        <>while I have your attention, let us know each other {':)'}</>
      </Salutation>
    </Wrapper>
  );
}
