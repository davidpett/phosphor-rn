import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsSixVerticalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M108 60a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm56 16a16 16 0 1 0-16-16 16 16 0 0 0 16 16Zm-72 36a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm72 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm-72 68a16 16 0 1 0 16 16 16 16 0 0 0-16-16Zm72 0a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgDotsSixVerticalBold);
export default Memo;
