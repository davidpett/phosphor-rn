import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBellZDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 192H48a8 8 0 0 1-6.88-12C47.71 168.6 56 139.81 56 104a72 72 0 0 1 144 0c0 35.82 8.3 64.6 14.9 76a8 8 0 0 1-6.9 12Z"
      opacity={0.2}
    />
    <Path d="M152 144a8 8 0 0 1-8 8h-32a8 8 0 0 1-6.65-12.44l23.7-35.56H112a8 8 0 0 1 0-16h32a8 8 0 0 1 6.65 12.44L127 136h17a8 8 0 0 1 8 8Zm69.84 48a15.8 15.8 0 0 1-13.84 8h-40.81a40 40 0 0 1-78.38 0H48a16 16 0 0 1-13.8-24.06C39.75 166.38 48 139.34 48 104a80 80 0 1 1 160 0c0 35.33 8.26 62.38 13.81 71.94a15.89 15.89 0 0 1 .03 16.06Zm-71.22 8h-45.24a24 24 0 0 0 45.24 0ZM208 184c-7.73-13.27-16-43.95-16-80a64 64 0 1 0-128 0c0 36.06-8.28 66.74-16 80Z" />
  </Svg>
);
const Memo = memo(SvgBellZDuotone);
export default Memo;
