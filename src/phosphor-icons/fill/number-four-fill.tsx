import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberFourFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm-32 128h-8v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1-7.43-11l32-80a8 8 0 0 1 14.86 6l-27.61 69H144v-32a8 8 0 0 1 16 0v32h8a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgNumberFourFill);
export default Memo;
