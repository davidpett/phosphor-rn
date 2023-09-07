import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCrownFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243.84 76.19a12.08 12.08 0 0 0-13.34-1.7l-50.21 25-41.92-69.63a12.11 12.11 0 0 0-20.74 0L75.71 99.52l-50.19-25a12.11 12.11 0 0 0-16.9 14.6l37 113.36a8 8 0 0 0 11.68 4.4c.25-.15 25.82-14.88 70.7-14.88s70.45 14.73 70.68 14.87a8 8 0 0 0 11.71-4.39l37-113.33a12.06 12.06 0 0 0-3.55-12.96Zm-68 80.61a8 8 0 0 1-7.87 6.61 8.36 8.36 0 0 1-1.4-.12 228.2 228.2 0 0 0-77.22 0 8 8 0 0 1-2.78-15.76 244.42 244.42 0 0 1 82.78 0 8 8 0 0 1 6.53 9.27Z" />
  </Svg>
);
const Memo = memo(SvgCrownFill);
export default Memo;
