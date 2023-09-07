import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsOutCardinalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M93.17 58.83a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L132 33.66V96a4 4 0 0 1-8 0V33.66L98.83 58.83a4 4 0 0 1-5.66 0Zm64 138.34L132 222.34V160a4 4 0 0 0-8 0v62.34l-25.17-25.17a4 4 0 0 0-5.66 5.66l32 32a4 4 0 0 0 5.66 0l32-32a4 4 0 0 0-5.66-5.66Zm77.66-72-32-32a4 4 0 0 0-5.66 5.66L222.34 124H160a4 4 0 0 0 0 8h62.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66ZM33.66 132H96a4 4 0 0 0 0-8H33.66l25.17-25.17a4 4 0 0 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 1 0 5.66-5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowsOutCardinalThin);
export default Memo;
