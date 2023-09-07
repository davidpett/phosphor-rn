import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileRsDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 88h-56V32Z" opacity={0.2} />
    <Path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v72a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-16a8 8 0 0 0 0 16h16a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66ZM160 51.31 188.69 80H160ZM64 144H48a8 8 0 0 0-8 8v56a8 8 0 0 0 16 0v-8h8a28.48 28.48 0 0 0 5.73-.59L77.09 212a8 8 0 0 0 13.82-8l-7.11-12.22A28 28 0 0 0 64 144Zm-8 40v-24h8a12 12 0 0 1 0 24Zm99.81 12.31a20.82 20.82 0 0 1-9.19 15.23C141.43 215 135 216 129.13 216a61.14 61.14 0 0 1-15.13-2 8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.79 2.83 26.35 7.66 24.11 24.97Z" />
  </Svg>
);
const Memo = memo(SvgFileRsDuotone);
export default Memo;
