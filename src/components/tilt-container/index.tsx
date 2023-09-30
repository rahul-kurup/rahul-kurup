import { ComponentProps } from 'react';
import Wrapper, { ResetTilt as StyledResetTilt } from './style';

export default function TiltContainer(
  props: ComponentProps<'div'> & { tiltDegree?: number; $tiltDegree?: number }
) {
  return <Wrapper {...(props as any)} />;
}

TiltContainer.ResetTilt = function ResetTilt(props: ComponentProps<'div'>) {
  return <StyledResetTilt {...(props as any)} />;
};
