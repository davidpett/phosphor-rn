import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHouseSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 115.55V208a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-92.45a16 16 0 0 1 5.17-11.78l80-75.48.11-.11a16 16 0 0 1 21.53 0 1.14 1.14 0 0 0 .11.11l80 75.48a16 16 0 0 1 5.08 11.78Z" />
  </Svg>
);
const Memo = memo(SvgHouseSimpleFill);
export default Memo;
