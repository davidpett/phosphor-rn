import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpRight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8ZM80 176a8 8 0 0 0 5.66-2.34L184 75.31V152a8 8 0 0 0 16 0V56a8 8 0 0 0-8-8H96a8 8 0 0 0 0 16h76.69l-98.35 98.34A8 8 0 0 0 80 176Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpRight);
export default Memo;
