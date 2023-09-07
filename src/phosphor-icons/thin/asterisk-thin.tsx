import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAsteriskThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M211.43 178.06a4 4 0 0 1-5.49 1.37L132 135.06V216a4 4 0 0 1-8 0v-80.94l-73.94 44.37a4 4 0 0 1-4.12-6.86L120.22 128 45.94 83.43a4 4 0 0 1 4.12-6.86L124 120.94V40a4 4 0 0 1 8 0v80.94l73.94-44.37a4 4 0 1 1 4.12 6.86L135.78 128l74.28 44.57a4 4 0 0 1 1.37 5.49Z" />
  </Svg>
);
const Memo = memo(SvgAsteriskThin);
export default Memo;
