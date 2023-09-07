import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMonitorFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Rect width={208} height={160} x={24} y={40} rx={24} />
    <Path d="M160 216H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgMonitorFill);
export default Memo;
