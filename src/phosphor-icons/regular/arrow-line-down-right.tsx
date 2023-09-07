import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineDownRight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Zm-32 56a8 8 0 0 0-8 8v76.69L85.66 82.34a8 8 0 0 0-11.32 11.32L172.69 192H96a8 8 0 0 0 0 16h96a8 8 0 0 0 8-8v-96a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineDownRight);
export default Memo;
