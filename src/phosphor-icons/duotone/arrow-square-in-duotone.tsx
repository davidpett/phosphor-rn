import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareInDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 48v128a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M128 136v64a8 8 0 0 1-16 0v-44.68l-66.34 66.34a8 8 0 0 1-11.32-11.32L100.68 144H56a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm80-104H80a16 16 0 0 0-16 16v48a8 8 0 0 0 16 0V48h128v128h-48a8 8 0 0 0 0 16h48a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareInDuotone);
export default Memo;
