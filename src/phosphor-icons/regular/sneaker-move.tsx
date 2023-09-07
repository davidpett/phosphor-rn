import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSneakerMove = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M104 208a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Zm-32-32a8 8 0 0 0-8-8H32a8 8 0 0 0 0 16h32a8 8 0 0 0 8-8Zm184 16v8a16 16 0 0 1-16 16h-92.69a15.93 15.93 0 0 1-11.26-4.63L28.78 107.42l-.09-.09a16 16 0 0 1 0-22.62l64-64.12.15-.14a15.91 15.91 0 0 1 22.35.27L123.4 29a16 16 0 0 1 4.66 10.54c1.13 22.88 17 38.31 41.31 40.27A16 16 0 0 1 184 95.7V120a32 32 0 0 0 32 32 40 40 0 0 1 40 40Zm-16 0a24 24 0 0 0-24-24 47.67 47.67 0 0 1-26.49-8H160a8 8 0 0 1 0-16h14.46a47.64 47.64 0 0 1-5.78-16H152a8 8 0 1 1 0-16h16V95.7c-15.43-1.26-28.88-7-38.88-16.6-10.39-10-16.28-23.41-17-38.83L103.87 32 40 96l107.22 103.9.09.08H240Z" />
  </Svg>
);
const Memo = memo(SvgSneakerMove);
export default Memo;
