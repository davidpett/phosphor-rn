import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFramerLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M200 96h-72L56 32h144ZM56 160l72 72v-72h72l-72-64H56Z"
      opacity={0.2}
    />
    <Path d="M208 96V32a8 8 0 0 0-8-8H56a8 8 0 0 0-5.31 14L107 88H56a8 8 0 0 0-8 8v64a8 8 0 0 0 2.34 5.66l72 72A8 8 0 0 0 136 232v-64h64a8 8 0 0 0 5.31-14L149 104h51a8 8 0 0 0 8-8Zm-29 56h-51a8 8 0 0 0-8 8v52.69l-56-56V104h61Zm13-64h-61L77 40h115Z" />
  </Svg>
);
const Memo = memo(SvgFramerLogoDuotone);
export default Memo;
