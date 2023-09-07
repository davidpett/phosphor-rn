import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartStraightBreakThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220.21 59.8a54.06 54.06 0 0 0-76.34 0L128 75l-15.82-15.2a54 54 0 0 0-76.4 76.35l89.37 90.66a4 4 0 0 0 5.7 0l89.36-90.64a54.07 54.07 0 0 0 0-76.37Zm-5.68 70.74L128 218.3l-86.55-87.78a46 46 0 0 1 65.13-65l15.65 15.07-13 12.52A4 4 0 0 0 108 96a4 4 0 0 0 1.17 2.86L138.35 128l-13.18 13.17a4 4 0 1 0 5.66 5.66l16-16a4 4 0 0 0 0-5.66L117.71 96l31.77-30.58a46 46 0 1 1 65.05 65.08Z" />
  </Svg>
);
const Memo = memo(SvgHeartStraightBreakThin);
export default Memo;
