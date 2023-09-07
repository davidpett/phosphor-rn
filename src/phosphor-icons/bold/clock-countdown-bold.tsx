import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClockCountdownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 137A108.13 108.13 0 1 1 119 20a12 12 0 0 1 2 24 84.12 84.12 0 1 0 91 91 12 12 0 1 1 24 2ZM116 76v52a12 12 0 0 0 12 12h52a12 12 0 0 0 0-24h-40V76a12 12 0 0 0-24 0Zm92 20a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm-32-32a16 16 0 1 0-16-16 16 16 0 0 0 16 16Z" />
  </Svg>
);
const Memo = memo(SvgClockCountdownBold);
export default Memo;
