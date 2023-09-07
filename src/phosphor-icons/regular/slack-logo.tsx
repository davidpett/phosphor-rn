import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlackLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M221.13 128A32 32 0 0 0 184 76.31V56a32 32 0 0 0-56-21.13A32 32 0 0 0 76.31 72H56a32 32 0 0 0-21.13 56A32 32 0 0 0 72 179.69V200a32 32 0 0 0 56 21.13A32 32 0 0 0 179.69 184H200a32 32 0 0 0 21.13-56ZM72 152a16 16 0 1 1-16-16h16Zm48 48a16 16 0 0 1-32 0v-48a16 16 0 0 1 16-16h16Zm0-80H56a16 16 0 0 1 0-32h48a16 16 0 0 1 16 16Zm0-48h-16a16 16 0 1 1 16-16Zm16-16a16 16 0 0 1 32 0v48a16 16 0 0 1-16 16h-16Zm16 160a16 16 0 0 1-16-16v-16h16a16 16 0 0 1 0 32Zm48-48h-48a16 16 0 0 1-16-16v-16h64a16 16 0 0 1 0 32Zm0-48h-16v-16a16 16 0 1 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgSlackLogo);
export default Memo;
