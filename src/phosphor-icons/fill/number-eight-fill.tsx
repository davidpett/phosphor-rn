import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberEightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M108 92a20 20 0 1 1 20 20 20 20 0 0 1-20-20Zm20 36a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm88-88v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Zm-44 116a44 44 0 0 0-20.23-37 36 36 0 1 0-47.54 0A44 44 0 1 0 172 156Z" />
  </Svg>
);
const Memo = memo(SvgNumberEightFill);
export default Memo;
