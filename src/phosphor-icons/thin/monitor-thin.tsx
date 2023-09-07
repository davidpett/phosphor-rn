import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMonitorThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 44H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20Zm12 132a12 12 0 0 1-12 12H48a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h160a12 12 0 0 1 12 12Zm-56 48a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgMonitorThin);
export default Memo;
