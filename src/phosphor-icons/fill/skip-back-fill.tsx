import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipBackFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 47.88v160.24a16 16 0 0 1-24.43 13.43L64 146.77V216a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0v69.23l119.57-74.78A15.95 15.95 0 0 1 208 47.88Z" />
  </Svg>
);
const Memo = memo(SvgSkipBackFill);
export default Memo;
