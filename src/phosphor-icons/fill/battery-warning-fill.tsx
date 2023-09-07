import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryWarningFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24Zm-92 32a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm140-80v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgBatteryWarningFill);
export default Memo;
