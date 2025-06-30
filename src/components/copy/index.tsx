import { genUrlFragment } from '@utils/common';
import clsx from 'clsx';
import {
  ComponentPropsWithoutRef,
  MouseEvent,
  useEffect,
  useState
} from 'react';
import Wrapper, { CopyContainer, Copied } from './style';

type Props<T> = T & ComponentPropsWithoutRef<'button'>;

function Copy({ content, ...props }: Props<{ content?: string }>) {
  async function handleCopy(e: MouseEvent<HTMLButtonElement>) {
    if (content) {
      if ('clipboard' in navigator) {
        await navigator.clipboard.writeText(content);
      }
      props.onClick?.(e);
    }
  }

  return (
    <Wrapper
      {...props}
      type='button'
      onClick={handleCopy}
      title='Copy link of this section'
    >
      🔗
    </Wrapper>
  );
}

export function CopyUrlFragment({
  fragmentId,
  className,
  ...props
}: Props<{ fragmentId: string }>) {
  const [url, setUrl] = useState(fragmentId);

  useEffect(() => {
    const urlWithFragment = genUrlFragment(fragmentId);
    if (url !== urlWithFragment) {
      setUrl(urlWithFragment);
    }
  }, [url, fragmentId]);

  return (
    <CopyContainer className={clsx(className, 'copy-fragment')}>
      <Copy {...props} content={url} className='copy-fragment-button' />
      <Copied>Copied</Copied>
    </CopyContainer>
  );
}

export default Copy;
