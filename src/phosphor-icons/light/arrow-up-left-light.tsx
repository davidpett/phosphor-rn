import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUpLeftLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196.24 196.24a6 6 0 0 1-8.48 0L70 78.48V168a6 6 0 0 1-12 0V64a6 6 0 0 1 6-6h104a6 6 0 0 1 0 12H78.48l117.76 117.76a6 6 0 0 1 0 8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowUpLeftLight);
export default Memo;
