import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShuffleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M107.14 98.8 128 128l-20.86 29.2A64 64 0 0 1 55.06 184H32V72h23.06a64 64 0 0 1 52.08 26.8Zm93.8-26.8a64 64 0 0 0-52.08 26.8L128 128l20.86 29.2a64 64 0 0 0 52.08 26.8H232V72Z"
      opacity={0.2}
    />
    <Path d="M237.66 178.34a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L212.69 192h-11.75a72.12 72.12 0 0 1-58.59-30.15l-41.72-58.4A56.1 56.1 0 0 0 55.06 80H32a8 8 0 0 1 0-16h23.06a72.12 72.12 0 0 1 58.59 30.15l41.72 58.4A56.1 56.1 0 0 0 200.94 176h11.75l-10.35-10.34a8 8 0 0 1 11.32-11.32ZM143 107a8 8 0 0 0 11.16-1.86l1.2-1.67A56.1 56.1 0 0 1 200.94 80h11.75l-10.35 10.34a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L212.69 64h-11.75a72.12 72.12 0 0 0-58.59 30.15l-1.2 1.67A8 8 0 0 0 143 107Zm-30 42a8 8 0 0 0-11.16 1.86l-1.2 1.67A56.1 56.1 0 0 1 55.06 176H32a8 8 0 0 0 0 16h23.06a72.12 72.12 0 0 0 58.59-30.15l1.2-1.67A8 8 0 0 0 113 149Z" />
  </Svg>
);
const Memo = memo(SvgShuffleDuotone);
export default Memo;
