import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDesktop = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 40H48a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h72v16H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16h-24v-16h72a24 24 0 0 0 24-24V64a24 24 0 0 0-24-24ZM48 56h160a8 8 0 0 1 8 8v80H40V64a8 8 0 0 1 8-8Zm160 128H48a8 8 0 0 1-8-8v-16h176v16a8 8 0 0 1-8 8Z" />
  </Svg>
);
const Memo = memo(SvgDesktop);
export default Memo;
