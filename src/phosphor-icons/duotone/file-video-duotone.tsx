import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileVideoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M112 175.67 144 160v56l-32-16.82V208a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8v-40a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8ZM152 32v56h56Z"
      opacity={0.2}
    />
    <Path d="M148.23 153.21a8 8 0 0 0-7.75-.39l-21.22 10.39A16 16 0 0 0 104 152H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h56a16 16 0 0 0 15.44-11.87l20.84 11A8 8 0 0 0 152 216v-56a8 8 0 0 0-3.77-6.79ZM104 208H48v-40h56v40Zm32-5.24-16-8.42v-13.68l16-7.83Zm77.66-120.42-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31 188.69 80H160Z" />
  </Svg>
);
const Memo = memo(SvgFileVideoDuotone);
export default Memo;
