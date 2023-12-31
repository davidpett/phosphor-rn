import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCardholderLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 50H48a22 22 0 0 0-22 22v112a22 22 0 0 0 22 22h160a22 22 0 0 0 22-22V72a22 22 0 0 0-22-22ZM38 94h180v20h-50.81a14 14 0 0 0-13.71 11.21 26 26 0 0 1-51 0A14 14 0 0 0 88.81 114H38Zm10-32h160a10 10 0 0 1 10 10v10H38V72a10 10 0 0 1 10-10Zm160 132H48a10 10 0 0 1-10-10v-58h50.81a2 2 0 0 1 2 1.59 38 38 0 0 0 74.48 0 2 2 0 0 1 1.95-1.59H218v58a10 10 0 0 1-10 10Z" />
  </Svg>
);
const Memo = memo(SvgCardholderLight);
export default Memo;
