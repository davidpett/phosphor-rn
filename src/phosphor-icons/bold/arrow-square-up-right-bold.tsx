import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareUpRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H52V52h152ZM87.51 168.49a12 12 0 0 1 0-17L131 108h-19a12 12 0 0 1 0-24h48a12 12 0 0 1 12 12v48a12 12 0 0 1-24 0v-19l-43.51 43.52a12 12 0 0 1-17 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareUpRightBold);
export default Memo;
