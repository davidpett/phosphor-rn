import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSortDescendingThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M44 128a4 4 0 0 1 4-4h72a4 4 0 0 1 0 8H48a4 4 0 0 1-4-4Zm4-60h56a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8Zm136 120H48a4 4 0 0 0 0 8h136a4 4 0 0 0 0-8Zm42.83-102.83-40-40a4 4 0 0 0-5.66 0l-40 40a4 4 0 0 0 5.66 5.66L180 57.66V144a4 4 0 0 0 8 0V57.66l33.17 33.17a4 4 0 1 0 5.66-5.66Z" />
  </Svg>
);
const Memo = memo(SvgSortDescendingThin);
export default Memo;
