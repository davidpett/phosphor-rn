import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRainbowBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M256 172v8a12 12 0 0 1-24 0v-8a104 104 0 0 0-208 0v8a12 12 0 0 1-24 0v-8a128 128 0 0 1 256 0Zm-128-32a36 36 0 0 0-36 36v4a12 12 0 0 0 24 0v-4a12 12 0 0 1 24 0v4a12 12 0 0 0 24 0v-4a36 36 0 0 0-36-36Zm0-48a84.09 84.09 0 0 0-84 84v4a12 12 0 0 0 24 0v-4a60 60 0 0 1 120 0v4a12 12 0 0 0 24 0v-4a84.09 84.09 0 0 0-84-84Z" />
  </Svg>
);
const Memo = memo(SvgRainbowBold);
export default Memo;
