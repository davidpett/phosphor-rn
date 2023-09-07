import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChartPieSliceDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M96 37.5v72l-62.4 36A96 96 0 0 1 96 37.5Z" opacity={0.2} />
    <Path d="M100 116.43a8 8 0 0 0 4-6.93v-72A8 8 0 0 0 93.34 30a104.06 104.06 0 0 0-67.61 117 8 8 0 0 0 4.52 5.81 7.86 7.86 0 0 0 3.35.74 8 8 0 0 0 4-1.07ZM88 49.62v55.26l-47.88 27.63C40 131 40 129.48 40 128a88.12 88.12 0 0 1 48-78.38Zm130.34 26.9c-.09-.18-.18-.37-.29-.55s-.2-.33-.31-.49A104.05 104.05 0 0 0 128 24a8 8 0 0 0-8 8v91.83l-78.81 45.9a8 8 0 0 0-2.87 11A104 104 0 0 0 232 128a103.34 103.34 0 0 0-13.66-51.48ZM136 40.36a88.05 88.05 0 0 1 63.89 36.94L136 114.51ZM128 216a88.45 88.45 0 0 1-71.49-36.68l75.4-43.91.22-.14 75.77-44.13A88 88 0 0 1 128 216Z" />
  </Svg>
);
const Memo = memo(SvgChartPieSliceDuotone);
export default Memo;
