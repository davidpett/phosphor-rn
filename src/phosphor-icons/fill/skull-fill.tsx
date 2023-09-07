import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkullFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 16C70.65 16 24 60.86 24 116c0 34.1 18.27 66 48 84.28V216a16 16 0 0 0 16 16h8a4 4 0 0 0 4-4v-27.73a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v28a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-27.75a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v28a4 4 0 0 0 4 4h8a16 16 0 0 0 16-16v-15.74C213.73 182 232 150.1 232 116c0-55.14-46.65-100-104-100ZM92 152a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm72 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgSkullFill);
export default Memo;
