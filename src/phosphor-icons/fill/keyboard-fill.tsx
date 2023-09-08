import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKeyboardFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M223.51 48h-191A16.51 16.51 0 0 0 16 64.49v127A16.51 16.51 0 0 0 32.49 208h191A16.51 16.51 0 0 0 240 191.51v-127A16.51 16.51 0 0 0 223.51 48ZM64 168H48a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm96 0H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Zm48 0h-16a8 8 0 0 1 0-16h16a8 8 0 0 1 0 16Zm0-32H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16Zm0-32H48a8 8 0 0 1 0-16h160a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgKeyboardFill);
export default Memo;
