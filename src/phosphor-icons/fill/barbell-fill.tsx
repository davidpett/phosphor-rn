import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBarbellFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 64v128a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-56h-48v56a16 16 0 0 1-16 16H72a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v56h48V64a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16ZM36 72h-4a16 16 0 0 0-16 16v32H8.27A8.18 8.18 0 0 0 0 127.47 8 8 0 0 0 8 136h8v32a16 16 0 0 0 16 16h4a4 4 0 0 0 4-4V76a4 4 0 0 0-4-4Zm220 55.47a8.18 8.18 0 0 0-8.25-7.47H240V88a16 16 0 0 0-16-16h-4a4 4 0 0 0-4 4v104a4 4 0 0 0 4 4h4a16 16 0 0 0 16-16v-32h8a8 8 0 0 0 8-8.53Z" />
  </Svg>
);
const Memo = memo(SvgBarbellFill);
export default Memo;
