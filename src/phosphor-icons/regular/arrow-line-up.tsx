import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUp = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M205.66 138.34a8 8 0 0 1-11.32 11.32L136 91.31V224a8 8 0 0 1-16 0V91.31l-58.34 58.35a8 8 0 0 1-11.32-11.32l72-72a8 8 0 0 1 11.32 0ZM216 32H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUp);
export default Memo;
