import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBatteryWarningLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 58H32a22 22 0 0 0-22 22v96a22 22 0 0 0 22 22h168a22 22 0 0 0 22-22V80a22 22 0 0 0-22-22Zm10 118a10 10 0 0 1-10 10H32a10 10 0 0 1-10-10V80a10 10 0 0 1 10-10h168a10 10 0 0 1 10 10Zm44-80v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0Zm-144 28V96a6 6 0 0 1 12 0v28a6 6 0 0 1-12 0Zm16 32a10 10 0 1 1-10-10 10 10 0 0 1 10 10Z" />
  </Svg>
);
const Memo = memo(SvgBatteryWarningLight);
export default Memo;
