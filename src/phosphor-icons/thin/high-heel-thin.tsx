import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHighHeelThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230.09 168.09 178 156.35 66.83 45.17A4 4 0 0 0 63.91 44a4 4 0 0 0-2.86 1.3C39.74 68.6 28 98 28 128v72a12 12 0 0 0 12 12h32a12 12 0 0 0 12-12v-55.64a116.73 116.73 0 0 1 55.59 60.23 11.93 11.93 0 0 0 11.13 7.41H240a12 12 0 0 0 12-12v-4.73a27.74 27.74 0 0 0-21.91-27.18ZM76 200a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-67.92a114.9 114.9 0 0 1 40 8.62Zm168 0a4 4 0 0 1-4 4h-89.28a4 4 0 0 1-3.71-2.42 124.36 124.36 0 0 0-44.87-55.76 123.1 123.1 0 0 0-66.07-21.75c.93-25.33 10.8-50 28.11-70.23l109 109a4 4 0 0 0 2 1.07l53.22 12a19.79 19.79 0 0 1 15.6 19.4Z" />
  </Svg>
);
const Memo = memo(SvgHighHeelThin);
export default Memo;
