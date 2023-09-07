import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineDownLeftBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 40a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12Zm-60.49 39.51L76 171v-67a12 12 0 0 0-24 0v96a12 12 0 0 0 12 12h96a12 12 0 0 0 0-24H93l91.52-91.51a12 12 0 0 0-17-17Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineDownLeftBold);
export default Memo;
