import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleZeroBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm0-144c-28.26 0-48 24.67-48 60s19.74 60 48 60 48-24.67 48-60-19.74-60-48-60Zm0 96c-23.33 0-24-32.32-24-36s.67-36 24-36 24 32.32 24 36-.67 36-24 36Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleZeroBold);
export default Memo;
