import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipForwardLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 34a6 6 0 0 0-6 6v72.84L71.37 36.14a14 14 0 0 0-14.21-.37A13.69 13.69 0 0 0 50 47.88v160.24a13.69 13.69 0 0 0 7.16 12.11 14 14 0 0 0 14.21-.37L194 143.17V216a6 6 0 0 0 12 0V40a6 6 0 0 0-6-6Zm-6.88 95.56L65 209.69a2 2 0 0 1-2 .05 1.79 1.79 0 0 1-1-1.62V47.88a1.79 1.79 0 0 1 1-1.62 2.1 2.1 0 0 1 1-.26 2 2 0 0 1 1 .31l128.12 80.13a1.82 1.82 0 0 1 0 3.12Z" />
  </Svg>
);
const Memo = memo(SvgSkipForwardLight);
export default Memo;
