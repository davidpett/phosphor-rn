import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShareNetworkFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M212 200a36 36 0 1 1-69.85-12.25l-53-34.05a36 36 0 1 1 0-51.4l53-34a36.09 36.09 0 1 1 8.67 13.45l-53 34.05a36 36 0 0 1 0 24.5l53 34.05A36 36 0 0 1 212 200Z" />
  </Svg>
);
const Memo = memo(SvgShareNetworkFill);
export default Memo;
