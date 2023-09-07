import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneTakeoffLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M174 216a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6Zm71.9-123.22a6 6 0 0 1-2.82 4l-147.41 88a38.22 38.22 0 0 1-19.23 5.23 37.8 37.8 0 0 1-25.92-10.33l-.1-.09-36.05-35.23a14 14 0 0 1 4-23l3-1.49a6 6 0 0 1 4.56-.29l29.15 9.83 23.17-14-23.7-23a14 14 0 0 1 4-23.18l.24-.1 7.15-2.71a6 6 0 0 1 4.19 0l54.84 20.18 52.38-31.27A37.81 37.81 0 0 1 226 64l.09.11L244.73 88a6 6 0 0 1 1.17 4.78ZM231.09 90l-14.42-18.47a25.86 25.86 0 0 0-33.26-5.89L128.6 98.36a6 6 0 0 1-5.15.48L68 78.45l-4.9 1.85a1.91 1.91 0 0 0-1.1 1.47 2 2 0 0 0 .63 1.82l.17.15 29.35 28.49a6 6 0 0 1-1.07 9.44l-32.19 19.49a6 6 0 0 1-5 .55l-29.45-9.94-.93.46-.28.13a2 2 0 0 0-.58 3.29l.1.09 36 35.28a25.84 25.84 0 0 0 30.81 3.47Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneTakeoffLight);
export default Memo;
