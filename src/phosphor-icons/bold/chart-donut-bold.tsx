import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartDonutBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M137.75 20.08A20 20 0 0 0 116 40v40.67a19.83 19.83 0 0 0 16.6 19.7 28 28 0 0 1-6.6 55.56 28.3 28.3 0 0 1-26-26.46c-.37-7.28 1.06-13.25 4.27-17.73a19.88 19.88 0 0 0-2.13-25.64L74.61 57.94l-.09-.09A20 20 0 0 0 45 59.22a107.62 107.62 0 0 0 7.17 145.68A107.21 107.21 0 0 0 128 236h1.55A108.32 108.32 0 0 0 236 129.53c.77-56.37-42.38-104.45-98.25-109.45ZM60.69 78l22.19 22.66a47.76 47.76 0 0 0-5.8 15.34H44.87a82.31 82.31 0 0 1 15.82-38Zm-15.83 62h32.53A52 52 0 0 0 116 178.6v32.55A84 84 0 0 1 44.86 140ZM140 211.11v-32.49A51.53 51.53 0 0 0 163.46 166 52 52 0 0 0 140 77.39V44.5c41.29 5.93 72.58 42.3 72 84.7-.58 41.36-32 76.05-72 81.91Z" />
  </Svg>
);
const Memo = memo(SvgChartDonutBold);
export default Memo;
