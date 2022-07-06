import Wrapper, { Head, HeadArc, Neck, LeftLimbs, RightLimbs } from './style';

export default function Logo() {
  return (
    <Wrapper
      viewBox='0 0 300 300'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMin meet'
    >
      <g>
        <title>Rahul Kurup&apos;s logo</title>
        <g transform='rotate(-111 150 150)'>
          <LeftLimbs x1='167' y1='170' x2='232.625' y2='102.5' />

          <LeftLimbs x1='160.625' y1='32' x2='149.625' y2='167.5' />

          <RightLimbs
            x1='156'
            y1='279.6'
            x2='250'
            y2='181.5'
            transform='rotate(90 209.125 225.5)'
          />

          <RightLimbs x1='62' y1='258' x2='155.5' y2='159' />

          <Neck
            points='2.1,1.5 15,-1 15,13'
            transform='translate(129.25, 147.4) rotate(53 10 10)'
          />

          <Head cx='86.875' cy='137' rx='40' ry='40' />

          <HeadArc
            d='M22,89.8 a59,77 0 0,0 80,5'
            transform='translate(40, 40) rotate(-141.3 61.5 82.7)'
          />
        </g>
      </g>
    </Wrapper>
  );
}
