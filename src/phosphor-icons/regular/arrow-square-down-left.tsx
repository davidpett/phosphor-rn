import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareDownLeft = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm0 176H48V48h160ZM88 160v-48a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 11.32L115.31 152H144a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareDownLeft);
export default Memo;
