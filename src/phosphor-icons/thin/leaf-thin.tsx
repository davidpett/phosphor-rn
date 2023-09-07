import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLeafThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M219.45 40.31a4 4 0 0 0-3.76-3.76C141.06 32.16 81.46 54.39 56.24 96 39 124.56 39.9 158.37 58.8 191.54l-21.63 21.63a4 4 0 0 0 5.66 5.66l21.63-21.64c17.39 9.91 35 14.89 51.83 14.89A83.43 83.43 0 0 0 160 199.76c41.61-25.22 63.84-84.83 59.45-159.45Zm-63.63 152.61c-25.37 15.37-55.56 14.75-85.48-1.61l92.5-92.49a4 4 0 0 0-5.66-5.66l-92.49 92.5c-16.36-29.92-17-60.11-1.61-85.48C86.34 61.77 141.72 41 211.66 44.34c3.34 69.94-17.43 125.32-55.84 148.58Z" />
  </Svg>
);
const Memo = memo(SvgLeafThin);
export default Memo;
