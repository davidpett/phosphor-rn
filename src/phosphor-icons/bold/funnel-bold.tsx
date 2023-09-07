import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFunnelBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.29 47.91A20 20 0 0 0 216 36H40a20 20 0 0 0-14.8 33.45l.12.14L92 140.75V216a20 20 0 0 0 31.1 16.64l32-21.33a20 20 0 0 0 8.9-16.65v-53.91l66.67-71.16.12-.14a20 20 0 0 0 3.5-21.54Zm-88.88 77.58a19.93 19.93 0 0 0-5.41 13.68v53.35l-24 16v-69.35a19.93 19.93 0 0 0-5.41-13.68L49.23 60h157.54Z" />
  </Svg>
);
const Memo = memo(SvgFunnelBold);
export default Memo;
