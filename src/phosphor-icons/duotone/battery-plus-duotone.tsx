import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryPlusDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 80v96a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h168a16 16 0 0 1 16 16Z"
      opacity={0.2}
    />
    <Path d="M152 128a8 8 0 0 1-8 8h-20v20a8 8 0 0 1-16 0v-20H88a8 8 0 0 1 0-16h20v-20a8 8 0 0 1 16 0v20h20a8 8 0 0 1 8 8Zm72-48v96a24 24 0 0 1-24 24H32a24 24 0 0 1-24-24V80a24 24 0 0 1 24-24h168a24 24 0 0 1 24 24Zm-16 0a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h168a8 8 0 0 0 8-8Zm40 8a8 8 0 0 0-8 8v64a8 8 0 0 0 16 0V96a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgBatteryPlusDuotone);
export default Memo;
