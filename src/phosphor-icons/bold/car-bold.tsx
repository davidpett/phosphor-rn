import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCarBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 108h-8.2l-26.72-60.12A20 20 0 0 0 186.8 36H69.2a20 20 0 0 0-18.28 11.88L24.2 108H16a12 12 0 0 0 0 24h4v76a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-20h88v20a20 20 0 0 0 20 20h24a20 20 0 0 0 20-20v-76h4a12 12 0 0 0 0-24ZM71.8 60h112.4l21.33 48H50.47ZM60 204H44v-16h16Zm136 0v-16h16v16Zm16-40H44v-32h168Z" />
  </Svg>
);
const Memo = memo(SvgCarBold);
export default Memo;
