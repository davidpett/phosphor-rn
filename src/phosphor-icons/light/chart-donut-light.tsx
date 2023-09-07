import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartDonutLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M137.21 26.05A14 14 0 0 0 122 40v40.67a13.86 13.86 0 0 0 11.58 13.78 34 34 0 1 1-39.53 35.33c-.44-8.68 1.37-15.92 5.38-21.53a13.87 13.87 0 0 0-1.5-17.91L70.28 62.1a14 14 0 0 0-20.69 1 101.62 101.62 0 0 0 6.79 137.57A101.29 101.29 0 0 0 128 230h1.46A102.31 102.31 0 0 0 230 129.45c.73-53.25-40-98.67-92.79-103.4Zm-78.4 44.69a2.06 2.06 0 0 1 1.48-.74h.09a1.89 1.89 0 0 1 1.37.54L89.4 98.78a2 2 0 0 1 .27 2.49A41.83 41.83 0 0 0 82.23 122h-44a88.42 88.42 0 0 1 20.58-51.26ZM38.22 134H82.4a46 46 0 0 0 39.6 39.61v44.17A89.93 89.93 0 0 1 38.22 134Zm153.34 57.56A89.48 89.48 0 0 1 134 217.79v-44.17a45.53 45.53 0 0 0 25.36-12 46 46 0 0 0-23.83-79 1.93 1.93 0 0 1-1.53-1.95V40a2 2 0 0 1 .66-1.5 1.91 1.91 0 0 1 1.48-.5c46.55 4.17 82.51 44.26 81.85 91.27a89.44 89.44 0 0 1-26.43 62.29Z" />
  </Svg>
);
const Memo = memo(SvgChartDonutLight);
export default Memo;
