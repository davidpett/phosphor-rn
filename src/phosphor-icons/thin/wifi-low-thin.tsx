import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiLowThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm34.35-42.23a72 72 0 0 0-84.7 0 4 4 0 1 0 4.71 6.46 64 64 0 0 1 75.28 0 4 4 0 1 0 4.71-6.46Z" />
  </Svg>
);
const Memo = memo(SvgWifiLowThin);
export default Memo;
