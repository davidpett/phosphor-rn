import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDropHalfThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M171 50.37a250.18 250.18 0 0 0-40.73-37.65 4 4 0 0 0-4.58 0A250.18 250.18 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63ZM204 144a75.41 75.41 0 0 1-1 12h-71v-24h71.21a93.38 93.38 0 0 1 .79 12Zm-13.86-52H132V68h43a176.56 176.56 0 0 1 15.14 24ZM132 164h69.31a75.63 75.63 0 0 1-11.4 24H132Zm0-40v-24h62a120.07 120.07 0 0 1 7.88 24Zm33.1-68.23q1.77 2 3.59 4.23H132V24.07a256.44 256.44 0 0 1 33.1 31.7ZM52 144c0-35.9 21.15-67.8 38.9-88.23a256.44 256.44 0 0 1 33.1-31.7v195.82A76.09 76.09 0 0 1 52 144Zm80 75.89V196h51.35A75.79 75.79 0 0 1 132 219.89Z" />
  </Svg>
);
const Memo = memo(SvgDropHalfThin);
export default Memo;
