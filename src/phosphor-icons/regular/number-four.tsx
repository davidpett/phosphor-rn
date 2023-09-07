import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberFour = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 152a8 8 0 0 1-8 8h-16v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1-7.53-10.69l40-112a8 8 0 0 1 15.06 5.38L83.35 144H144V96a8 8 0 0 1 16 0v48h16a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgNumberFour);
export default Memo;
