import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUpLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M194.83 194.83a4 4 0 0 1-5.66 0L68 73.66V168a4 4 0 0 1-8 0V64a4 4 0 0 1 4-4h104a4 4 0 0 1 0 8H73.66l121.17 121.17a4 4 0 0 1 0 5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowUpLeftThin);
export default Memo;
