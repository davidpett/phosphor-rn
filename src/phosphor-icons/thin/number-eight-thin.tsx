import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberEightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M147.08 119.64a44 44 0 1 0-38.16 0 52 52 0 1 0 38.16 0ZM92 80a36 36 0 1 1 36 36 36 36 0 0 1-36-36Zm36 132a44 44 0 1 1 44-44 44.05 44.05 0 0 1-44 44Z" />
  </Svg>
);
const Memo = memo(SvgNumberEightThin);
export default Memo;
