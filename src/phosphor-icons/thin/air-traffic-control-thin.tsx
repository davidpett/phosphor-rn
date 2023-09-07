import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirTrafficControlThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M225.83 65.11A12 12 0 0 0 216 60h-84V20h20a4 4 0 0 0 0-8h-48a4 4 0 0 0 0 8h20v40H40a12 12 0 0 0-11.28 16.1l26.19 72a12 12 0 0 0 11.27 7.9H100v68a4 4 0 0 0 8 0v-68h40v68a4 4 0 0 0 8 0v-68h33.82a12 12 0 0 0 11.27-7.9l26.19-72a12 12 0 0 0-1.45-10.99ZM107.34 148 92.79 68h70.42l-14.55 80Zm-44.92-2.63-26.18-72A4 4 0 0 1 40 68h44.66l14.54 80h-33a4 4 0 0 1-3.78-2.63Zm157.34-72-26.18 72a4 4 0 0 1-3.76 2.63h-33l14.55-80H216a4 4 0 0 1 3.76 5.37Z" />
  </Svg>
);
const Memo = memo(SvgAirTrafficControlThin);
export default Memo;
