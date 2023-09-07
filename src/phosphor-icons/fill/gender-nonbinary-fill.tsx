import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderNonbinaryFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm-72 184a52 52 0 0 1-8-103.38v-20.8L91 95.43a8 8 0 0 1-6-14.86L106.46 72 85 63.43a8 8 0 0 1 6-14.86l37 14.81 37-14.81a8 8 0 1 1 6 14.86L149.54 72 171 80.57a8 8 0 0 1-6 14.86l-29-11.61v20.8A52 52 0 0 1 128 208Zm36-52a36 36 0 1 1-36-36 36 36 0 0 1 36 36Z" />
  </Svg>
);
const Memo = memo(SvgGenderNonbinaryFill);
export default Memo;
