import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgProjectorScreenDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 72v112H48V72Z" opacity={0.2} />
    <Path d="M232 64V48a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16v96h-8a8 8 0 0 0 0 16h88v17.38a24 24 0 1 0 16 0V192h88a8 8 0 0 0 0-16h-8V80a16 16 0 0 0 16-16ZM128 240a8 8 0 1 1 8-8 8 8 0 0 1-8 8ZM40 48h176v16H40Zm160 128H56V80h144Z" />
  </Svg>
);
const Memo = memo(SvgProjectorScreenDuotone);
export default Memo;
