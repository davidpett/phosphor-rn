import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiHighThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 204a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm98.54-113.9a168 168 0 0 0-213.08 0 4 4 0 1 0 5.08 6.18 160 160 0 0 1 202.92 0 4 4 0 0 0 5.08-6.18Zm-32.06 35.81a120 120 0 0 0-149 0 4 4 0 0 0 5 6.27 112 112 0 0 1 139 0 4 4 0 0 0 5-6.27Zm-32.13 35.86a72 72 0 0 0-84.7 0 4 4 0 1 0 4.7 6.46 64.07 64.07 0 0 1 75.3 0 4 4 0 0 0 5.58-.87 4 4 0 0 0-.88-5.59Z" />
  </Svg>
);
const Memo = memo(SvgWifiHighThin);
export default Memo;
