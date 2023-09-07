import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotionLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48a8 8 0 0 1-8 8h-16v152a8 8 0 0 1-8 8h-40a8 8 0 0 1-7-4.14L72 79.15V200h16a8 8 0 0 1 0 16H40a8 8 0 0 1 0-16h16V56H40a8 8 0 0 1 0-16h64a8 8 0 0 1 7 4.14l73 132.71V56h-16a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgNotionLogoFill);
export default Memo;
