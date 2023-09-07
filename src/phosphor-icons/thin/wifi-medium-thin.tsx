import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiMediumThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm66.48-78.09a120 120 0 0 0-149 0 4 4 0 0 0 5 6.27 112 112 0 0 1 139 0 4 4 0 0 0 5-6.27Zm-32.13 35.86a72 72 0 0 0-84.7 0 4 4 0 1 0 4.71 6.46 64 64 0 0 1 75.28 0 4 4 0 1 0 4.71-6.46Z" />
  </Svg>
);
const Memo = memo(SvgWifiMediumThin);
export default Memo;
