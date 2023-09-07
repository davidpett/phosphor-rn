import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineDownRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 40a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12Zm-36 52a12 12 0 0 0-12 12v67L88.49 79.51a12 12 0 0 0-17 17L163 188H96a12 12 0 0 0 0 24h96a12 12 0 0 0 12-12v-96a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineDownRightBold);
export default Memo;
