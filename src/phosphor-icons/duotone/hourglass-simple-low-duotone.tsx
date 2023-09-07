import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassSimpleLowDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M200 216H56a8 8 0 0 1-5.66-13.66L77.87 176h100.26l27.51 26.34A8 8 0 0 1 200 216Z"
      opacity={0.2}
    />
    <Path d="M211.18 196.56 139.57 128l71.61-68.56a1.59 1.59 0 0 1 .13-.13A16 16 0 0 0 200 32H56a16 16 0 0 0-11.31 27.31 1.59 1.59 0 0 1 .13.13L116.43 128l-71.61 68.56a1.59 1.59 0 0 1-.13.13A16 16 0 0 0 56 224h144a16 16 0 0 0 11.32-27.31 1.59 1.59 0 0 1-.14-.13ZM56 48Zm102.21 120H97.79L128 139.08ZM200 48l-72 68.92L56 48ZM56 208l25.06-24h93.84l25.1 24Z" />
  </Svg>
);
const Memo = memo(SvgHourglassSimpleLowDuotone);
export default Memo;
