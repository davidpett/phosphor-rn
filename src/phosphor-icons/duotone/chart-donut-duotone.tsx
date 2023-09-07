import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartDonutDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 129.37c-.72 51.7-42.92 93.9-94.62 94.62H128V168a40 40 0 0 0 6.55-79.47 7.92 7.92 0 0 1-6.55-7.86V40a8 8 0 0 1 8.67-8c49.4 4.46 88.03 46.65 87.33 97.37Z"
      opacity={0.2}
    />
    <Path d="M137.39 24.06A16 16 0 0 0 120 40v40.67a15.86 15.86 0 0 0 13.25 15.76A32 32 0 1 1 96 129.68c-.41-8.22 1.27-15 5-20.26a15.86 15.86 0 0 0-1.69-20.47L71.69 60.68a16 16 0 0 0-23.63 1.1A103.6 103.6 0 0 0 55 202.05 103.24 103.24 0 0 0 128 232h1.49A104.3 104.3 0 0 0 232 129.48c.75-54.3-40.81-100.6-94.61-105.42ZM60.32 71.94l27.61 28.19v.06A43.29 43.29 0 0 0 80.44 120H40.36a87.13 87.13 0 0 1 19.96-48.06ZM40.37 136h40.3A48 48 0 0 0 120 175.34v40.3A88 88 0 0 1 40.37 136Zm149.77 54.14A87.45 87.45 0 0 1 136 215.61v-40.27a47.59 47.59 0 0 0 24.73-12.23A48 48 0 0 0 136 80.66V40c45.52 4.08 80.67 43.28 80 89.25a87.45 87.45 0 0 1-25.86 60.89Z" />
  </Svg>
);
const Memo = memo(SvgChartDonutDuotone);
export default Memo;
