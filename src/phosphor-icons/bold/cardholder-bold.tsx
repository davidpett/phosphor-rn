import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCardholderBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 44H48a28 28 0 0 0-28 28v112a28 28 0 0 0 28 28h160a28 28 0 0 0 28-28V72a28 28 0 0 0-28-28ZM48 68h160a4 4 0 0 1 4 4v16h-44.81a20 20 0 0 0-19.59 16 20 20 0 0 1-39.2 0 20 20 0 0 0-19.59-16H44V72a4 4 0 0 1 4-4Zm160 120H48a4 4 0 0 1-4-4v-72h41.66a44 44 0 0 0 84.68 0H212v72a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgCardholderBold);
export default Memo;
