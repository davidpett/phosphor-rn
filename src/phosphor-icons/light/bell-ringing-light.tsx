import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellRingingLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M223.05 69.33a6 6 0 0 1-8.05-2.57 96 96 0 0 0-34.2-37.68 6 6 0 0 1 6.4-10.15 109.26 109.26 0 0 1 38.41 42.31 6 6 0 0 1-2.56 8.09ZM41 66.76a96 96 0 0 1 34.2-37.68 6 6 0 0 0-6.4-10.15 109.26 109.26 0 0 0-38.41 42.31A6 6 0 1 0 41 66.76Zm179 110.18A14 14 0 0 1 208 198h-42.5a38 38 0 0 1-75 0H48a14 14 0 0 1-12.06-21.06C45.13 161.09 50 138.63 50 112a78 78 0 0 1 156 0c0 27 4.74 48.86 14.08 64.94ZM153.29 198h-50.58a26 26 0 0 0 50.58 0Zm56.42-15C199.29 165 194 141.15 194 112a66 66 0 0 0-132 0c0 29.16-5.29 53-15.71 71a2 2 0 0 0 0 2 1.9 1.9 0 0 0 1.7 1H208a1.9 1.9 0 0 0 1.7-1 2 2 0 0 0 .01-2Z" />
  </Svg>
);
const Memo = memo(SvgBellRingingLight);
export default Memo;
