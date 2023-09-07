import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretDoubleDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216.49 119.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 1 1 17-17L128 191l71.51-71.52a12 12 0 0 1 16.98.03Zm-97 17a12 12 0 0 0 17 0l80-80a12 12 0 0 0-17-17L128 111 56.49 39.51a12 12 0 0 0-17 17Z" />
  </Svg>
);
const Memo = memo(SvgCaretDoubleDownBold);
export default Memo;
