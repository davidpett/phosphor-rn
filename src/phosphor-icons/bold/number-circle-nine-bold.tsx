import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleNineBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm20-138.64a40 40 0 1 0-25.06 74.32l-13.24 22.17a12 12 0 1 0 20.6 12.3L162.64 128A40 40 0 0 0 148 73.36ZM141.86 116A16 16 0 1 1 136 94.14a16 16 0 0 1 5.84 21.86Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleNineBold);
export default Memo;
