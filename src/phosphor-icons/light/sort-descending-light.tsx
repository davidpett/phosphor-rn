import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSortDescendingLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M42 128a6 6 0 0 1 6-6h72a6 6 0 0 1 0 12H48a6 6 0 0 1-6-6Zm6-58h56a6 6 0 0 0 0-12H48a6 6 0 0 0 0 12Zm136 116H48a6 6 0 0 0 0 12h136a6 6 0 0 0 0-12Zm44.24-102.24-40-40a6 6 0 0 0-8.48 0l-40 40a6 6 0 0 0 8.48 8.48L178 62.49V144a6 6 0 0 0 12 0V62.49l29.76 29.75a6 6 0 0 0 8.48-8.48Z" />
  </Svg>
);
const Memo = memo(SvgSortDescendingLight);
export default Memo;
