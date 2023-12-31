import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryPlusThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M148 128a4 4 0 0 1-4 4h-24v24a4 4 0 0 1-8 0v-24H88a4 4 0 0 1 0-8h24v-24a4 4 0 0 1 8 0v24h24a4 4 0 0 1 4 4Zm72-48v96a20 20 0 0 1-20 20H32a20 20 0 0 1-20-20V80a20 20 0 0 1 20-20h168a20 20 0 0 1 20 20Zm-8 0a12 12 0 0 0-12-12H32a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h168a12 12 0 0 0 12-12Zm36 12a4 4 0 0 0-4 4v64a4 4 0 0 0 8 0V96a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgBatteryPlusThin);
export default Memo;
