import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareInFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 136v64a8 8 0 0 1-13.66 5.66L88 179.31l-42.34 42.35a8 8 0 0 1-11.32-11.32L76.69 168l-26.35-26.34A8 8 0 0 1 56 128h64a8 8 0 0 1 8 8Zm80-104H80a16 16 0 0 0-16 16v48a8 8 0 0 0 16 0V48h128v128h-48a8 8 0 0 0 0 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareInFill);
export default Memo;
