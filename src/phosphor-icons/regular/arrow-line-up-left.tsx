import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpLeft = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM64 160a8 8 0 0 0 8-8V75.31l98.34 98.35a8 8 0 0 0 11.32-11.32L83.31 64H160a8 8 0 0 0 0-16H64a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpLeft);
export default Memo;
