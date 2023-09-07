import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserCircleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20ZM79.57 196.57a60 60 0 0 1 96.86 0 83.72 83.72 0 0 1-96.86 0ZM100 120a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm94 59.94a83.48 83.48 0 0 0-29-23.42 52 52 0 1 0-74 0 83.48 83.48 0 0 0-29 23.42 84 84 0 1 1 131.9 0Z" />
  </Svg>
);
const Memo = memo(SvgUserCircleBold);
export default Memo;
