import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPatreonLogoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 104a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64ZM80 40H64a16 16 0 0 0-16 16v152a16 16 0 0 0 16 16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgPatreonLogoFill);
export default Memo;
