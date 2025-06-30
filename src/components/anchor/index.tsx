import { ComponentPropsWithoutRef } from 'react';
import Wrapper from './style';

export default function Anchor(props: ComponentPropsWithoutRef<'a'>) {
  return <Wrapper target='_blank' rel='noopener noreferrer' {...props} />;
}
