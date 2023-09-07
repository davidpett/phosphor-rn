import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTelevisionSimpleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 80v120a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V80a16 16 0 0 1 16-16h68.69L74.34 29.66a8 8 0 0 1 11.32-11.32L128 60.69l42.34-42.35a8 8 0 1 1 11.32 11.32L147.31 64H216a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgTelevisionSimpleFill);
export default Memo;
