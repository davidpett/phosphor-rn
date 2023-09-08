import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCalculatorFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM88 200a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-40a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm40 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-40a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm40 40a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm0-40a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm16-56a8 8 0 0 1-8 8H80a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgCalculatorFill);
export default Memo;
