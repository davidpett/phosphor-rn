import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleTwoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm24-95.95-36 48h36a6 6 0 0 1 0 12h-48a6 6 0 0 1-4.8-9.6l43.17-57.56A18 18 0 1 0 111 98a6 6 0 1 1-11.31-4A30 30 0 1 1 152 122.05Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleTwoLight);
export default Memo;
