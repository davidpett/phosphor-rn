import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlagFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48v120a8 8 0 0 1-2.76 6c-15.28 13.23-29.89 18-43.82 18-18.91 0-36.57-8.74-53-16.85C97.87 162 74.79 150.61 48 171.77V216a8 8 0 0 1-16 0V48a8 8 0 0 1 2.77-6c36-31.18 68.31-15.21 96.79-1.12C159 54.46 182.79 66.2 210.76 42A8 8 0 0 1 224 48Z" />
  </Svg>
);
const Memo = memo(SvgFlagFill);
export default Memo;
