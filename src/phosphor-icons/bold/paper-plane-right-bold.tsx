import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaperPlaneRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M225.86 110.48 57.8 14.58a20 20 0 0 0-28.64 24.09l30.61 89.21-30.61 89.45A20 20 0 0 0 48 244a20.1 20.1 0 0 0 9.81-2.58l.09-.06 168-96.07a20 20 0 0 0 0-34.81ZM55.24 215.23 81 140h55a12 12 0 0 0 0-24H81.07L55.25 40.76l152.69 87.13Z" />
  </Svg>
);
const Memo = memo(SvgPaperPlaneRightBold);
export default Memo;
