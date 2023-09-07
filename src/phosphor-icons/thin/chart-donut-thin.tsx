import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartDonutThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M137 28.05a11.94 11.94 0 0 0-9.12 3.08A12.09 12.09 0 0 0 124 40v40.67a11.88 11.88 0 0 0 9.9 11.81 36 36 0 1 1-41.85 37.4c-.47-9.14 1.47-16.8 5.75-22.79a11.89 11.89 0 0 0-1.3-15.35L68.87 63.51a12 12 0 0 0-17.74.83 99.6 99.6 0 0 0 6.66 134.86A99.24 99.24 0 0 0 128 228h1.43A100.29 100.29 0 0 0 228 129.42c.72-52.21-39.24-96.74-91-101.37ZM57.28 69.46A4 4 0 0 1 60.2 68h.19a3.91 3.91 0 0 1 2.79 1.14l27.63 28.22a3.93 3.93 0 0 1 .48 5.08A40.47 40.47 0 0 0 84.08 124h-48a90.36 90.36 0 0 1 21.2-54.54ZM36.09 132h48.09A44 44 0 0 0 124 171.81v48.09A92 92 0 0 1 36.09 132ZM193 193a91.43 91.43 0 0 1-61 26.92v-48.1a43.51 43.51 0 0 0 26-11.63 44 44 0 0 0-22.79-75.6 4 4 0 0 1-3.21-3.92V40a4 4 0 0 1 1.31-3 3.89 3.89 0 0 1 3-1c47.59 4.26 84.34 45.24 83.67 93.29A91.42 91.42 0 0 1 193 193Z" />
  </Svg>
);
const Memo = memo(SvgChartDonutThin);
export default Memo;
