import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsSixVertical = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 60a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm60 12a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm-72 44a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm72 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm-72 68a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm72 0a12 12 0 1 0 12 12 12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgDotsSixVertical);
export default Memo;
