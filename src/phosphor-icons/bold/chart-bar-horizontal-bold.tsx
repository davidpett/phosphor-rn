import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartBarHorizontalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 92h-36V56a12 12 0 0 0-12-12H52v-4a12 12 0 0 0-24 0v176a12 12 0 0 0 24 0v-4h84a12 12 0 0 0 12-12v-36h68a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12Zm-60-24v24H52V68Zm-32 120H52v-24h72Zm80-48H52v-24h152Z" />
  </Svg>
);
const Memo = memo(SvgChartBarHorizontalBold);
export default Memo;
