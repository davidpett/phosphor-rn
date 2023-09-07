import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleFiveBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm-5.83-120-2.71 16.23A45.39 45.39 0 0 1 124 108a40 40 0 0 1 0 80 39.53 39.53 0 0 1-28.57-11.6 12 12 0 1 1 17.14-16.8A15.54 15.54 0 0 0 124 164a16 16 0 0 0 0-32 15.54 15.54 0 0 0-11.43 4.4A12 12 0 0 1 92.16 126l8-48A12 12 0 0 1 112 68h40a12 12 0 0 1 0 24Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleFiveBold);
export default Memo;
