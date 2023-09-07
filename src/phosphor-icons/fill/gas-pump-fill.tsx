import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGasPumpFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m241 69.66-19.34-19.32a8 8 0 0 0-11.32 11.32L229.66 81a8 8 0 0 1 2.34 5.63V168a8 8 0 0 1-16 0v-40a24 24 0 0 0-24-24h-16V56a24 24 0 0 0-24-24H72a24 24 0 0 0-24 24v152H32a8 8 0 0 0 0 16h160a8 8 0 0 0 0-16h-16v-88h16a8 8 0 0 1 8 8v40a24 24 0 0 0 48 0V86.63a23.85 23.85 0 0 0-7-16.97ZM144 120H80a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgGasPumpFill);
export default Memo;
