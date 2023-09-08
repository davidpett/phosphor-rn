import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSwatchesBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M234.79 149.32 215.7 97.11a20 20 0 0 0-25.58-11.91l-61.31 22.22 10.89-62.24A20 20 0 0 0 123.55 22l-54.68-9.69a19.94 19.94 0 0 0-23.11 16.24l-25 143.13a48 48 0 0 0 38.64 55.58 51.19 51.19 0 0 0 8.7.74H216a20 20 0 0 0 20-20v-51.81a21.74 21.74 0 0 0-1.21-6.87ZM91 184.18a23.84 23.84 0 0 1-9.86 15.56 23.28 23.28 0 0 1-17.56 3.89 24 24 0 0 1-19.23-27.82L68.71 36.66 115.37 45 91 184.18Zm23.64 4.13 9.39-53.64 70.49-25.54 16.3 44.59-96.23 34.87c.03-.09.06-.18.07-.28ZM212 204h-69.48L212 178.82ZM81.22 174.07l-1.4 8A12 12 0 0 1 68 192a12.35 12.35 0 0 1-2.08-.18 12 12 0 0 1-9.75-13.89l1.4-8a12 12 0 0 1 23.64 4.14Z" />
  </Svg>
);
const Memo = memo(SvgSwatchesBold);
export default Memo;
