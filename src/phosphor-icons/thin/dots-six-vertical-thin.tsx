import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsSixVerticalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M100 60a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm64 8a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm-72 52a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm72 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm-72 68a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm72 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgDotsSixVerticalThin);
export default Memo;
