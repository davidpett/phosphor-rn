import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtractFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M174.63 81.35a80 80 0 1 0-93.28 93.28 80 80 0 1 0 93.28-93.28ZM96 160a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64Z" />
  </Svg>
);
const Memo = memo(SvgSubtractFill);
export default Memo;
