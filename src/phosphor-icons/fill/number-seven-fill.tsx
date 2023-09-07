import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSevenFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm-32.47 50.69-40 112a8 8 0 1 1-15.06-5.38L148.65 80H96a8 8 0 0 1 0-16h64a8 8 0 0 1 7.53 10.69Z" />
  </Svg>
);
const Memo = memo(SvgNumberSevenFill);
export default Memo;
