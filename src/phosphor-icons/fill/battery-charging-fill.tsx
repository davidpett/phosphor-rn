import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryChargingFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M256 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Zm-32-16v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24Zm-85.19 43.79A8 8 0 0 0 132 120h-19.06l10.22-20.42a8 8 0 1 0-14.32-7.16l-16 32A8 8 0 0 0 100 136h19.06l-10.22 20.42a8 8 0 0 0 14.32 7.16l16-32a8 8 0 0 0-.35-7.79Z" />
  </Svg>
);
const Memo = memo(SvgBatteryChargingFill);
export default Memo;
