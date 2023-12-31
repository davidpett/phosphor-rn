import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileCloud = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31 188.69 80H160ZM108 128a52 52 0 0 0-48 32 36 36 0 0 0 0 72h48a52 52 0 0 0 0-104Zm0 88H60a20 20 0 0 1-3.81-39.64 8 8 0 0 0 16 .36 38 38 0 0 1 1.06-6.09 7.56 7.56 0 0 0 .27-1A36 36 0 1 1 108 216Z" />
  </Svg>
);
const Memo = memo(SvgFileCloud);
export default Memo;
