import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFrameCornersBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M140 88a12 12 0 0 1 12-12h32a12 12 0 0 1 12 12v32a12 12 0 0 1-24 0v-20h-20a12 12 0 0 1-12-12Zm-68 92h32a12 12 0 0 0 0-24H84v-20a12 12 0 0 0-24 0v32a12 12 0 0 0 12 12ZM236 56v144a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20Zm-24 4H44v136h168Z" />
  </Svg>
);
const Memo = memo(SvgFrameCornersBold);
export default Memo;
