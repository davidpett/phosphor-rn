import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleTwoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm24 144a8 8 0 0 1 0 16h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15 8 8 0 0 1-15.09-5.34 32 32 0 1 1 55.74 29.93L120 168Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleTwoFill);
export default Memo;
