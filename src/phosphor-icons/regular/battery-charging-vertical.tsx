import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryChargingVertical = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M150.81 131.79a8 8 0 0 1 .35 7.79l-16 32a8 8 0 0 1-14.32-7.16L131.06 144H112a8 8 0 0 1-7.16-11.58l16-32a8 8 0 1 1 14.32 7.16L124.94 128H144a8 8 0 0 1 6.81 3.79ZM96 16h64a8 8 0 0 0 0-16H96a8 8 0 0 0 0 16Zm104 40v168a24 24 0 0 1-24 24H80a24 24 0 0 1-24-24V56a24 24 0 0 1 24-24h96a24 24 0 0 1 24 24Zm-16 0a8 8 0 0 0-8-8H80a8 8 0 0 0-8 8v168a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8Z" />
  </Svg>
);
const Memo = memo(SvgBatteryChargingVertical);
export default Memo;
