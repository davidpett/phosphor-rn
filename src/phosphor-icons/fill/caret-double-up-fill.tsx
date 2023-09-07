import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretDoubleUpFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.66 202.34A8 8 0 0 1 208 216H48a8 8 0 0 1-5.66-13.66L108.69 136H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80A8 8 0 0 1 208 136h-60.69Z" />
  </Svg>
);
const Memo = memo(SvgCaretDoubleUpFill);
export default Memo;
