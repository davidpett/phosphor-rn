import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCardholderThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 52H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V72a20 20 0 0 0-20-20ZM36 92h184v24h-52.81a12 12 0 0 0-11.75 9.6 28 28 0 0 1-54.88 0 12 12 0 0 0-11.75-9.6H36Zm12-32h160a12 12 0 0 1 12 12v12H36V72a12 12 0 0 1 12-12Zm160 136H48a12 12 0 0 1-12-12v-60h52.81a4 4 0 0 1 3.91 3.2 36 36 0 0 0 70.56 0 4 4 0 0 1 3.91-3.2H220v60a12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgCardholderThin);
export default Memo;
