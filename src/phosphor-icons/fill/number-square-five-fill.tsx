import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareFiveFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-84 80a36 36 0 0 1 0 72 35.54 35.54 0 0 1-25.71-10.4 8 8 0 1 1 11.42-11.2A19.73 19.73 0 0 0 124 168a20 20 0 0 0 0-40 19.73 19.73 0 0 0-14.29 5.6 8 8 0 0 1-13.6-6.92l8-48A8 8 0 0 1 112 72h40a8 8 0 0 1 0 16h-33.22l-4.19 25.14A38.8 38.8 0 0 1 124 112Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareFiveFill);
export default Memo;
