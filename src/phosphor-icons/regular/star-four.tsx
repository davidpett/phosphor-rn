import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarFour = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.5 113-63.43-23L143 26.5a16 16 0 0 0-30 0L90 89.93 26.5 113a16 16 0 0 0 0 30l63.43 23L113 229.5a16 16 0 0 0 30 0l23.07-63.44L229.5 143a16 16 0 0 0 0-30Zm-68.93 38a16 16 0 0 0-9.54 9.54L128 223.9l-23-63.33a16 16 0 0 0-9.57-9.57L32.1 128l63.33-23a16 16 0 0 0 9.57-9.57l23-63.33 23 63.33a16 16 0 0 0 9.54 9.54l63.33 23Z" />
  </Svg>
);
const Memo = memo(SvgStarFour);
export default Memo;
