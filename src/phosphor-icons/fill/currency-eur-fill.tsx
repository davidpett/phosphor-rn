import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyEurFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 80a8 8 0 0 1 0 16H88v16h32a8 8 0 0 1 0 16H89.89a44.25 44.25 0 0 0 72.6 18.74 8 8 0 1 1 11 11.6A60.22 60.22 0 0 1 73.36 152H64a8 8 0 0 1 0-16h8v-16h-8a8 8 0 0 1 0-16h9.12a60.21 60.21 0 0 1 100.39-31.48 8 8 0 1 1-11 11.6A44.24 44.24 0 0 0 89.56 104Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyEurFill);
export default Memo;
