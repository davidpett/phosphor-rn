import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSneakerMoveDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M248 192v8a8 8 0 0 1-8 8h-92.69a8 8 0 0 1-5.65-2.34l-107.32-104a8 8 0 0 1 0-11.32l64-64.13a8 8 0 0 1 11.17.13l8.23 8.23a8 8 0 0 1 2.32 5.28c1.36 27.59 21.35 45.66 48.66 47.86a8 8 0 0 1 7.27 8V120a40 40 0 0 0 40 40A32 32 0 0 1 248 192Z"
      opacity={0.2}
    />
    <Path d="M216 152a32 32 0 0 1-32-32V95.7a16 16 0 0 0-14.63-15.94c-24.35-2-40.18-17.39-41.31-40.27A16 16 0 0 0 123.4 29l-8.22-8.23a15.91 15.91 0 0 0-22.35-.27l-.15.14-64 64.12a16 16 0 0 0 0 22.62l.09.09 107.27 104a15.93 15.93 0 0 0 11.27 4.53H240a16 16 0 0 0 16-16v-8a40 40 0 0 0-40-40Zm24 48h-92.69l-.09-.08L40 96l63.87-64 8.21 8.2c.76 15.42 6.65 28.85 17 38.83 10 9.6 23.45 15.34 38.88 16.6V112H152a8 8 0 1 0 0 16h16.68a47.64 47.64 0 0 0 5.78 16H160a8 8 0 0 0 0 16h29.51a47.67 47.67 0 0 0 26.49 8 24 24 0 0 1 24 24ZM64 184H32a8 8 0 0 1 0-16h32a8 8 0 0 1 0 16Zm40 24a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgSneakerMoveDuotone);
export default Memo;
