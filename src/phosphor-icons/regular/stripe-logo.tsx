import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStripeLogo = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 152c0 17.65-17.94 32-40 32s-40-14.35-40-32a8 8 0 0 1 16 0c0 8.67 11 16 24 16s24-7.33 24-16c0-9.48-8.61-13-26.88-18.26-15.75-4.54-35.34-10.19-35.34-29.74 0-18.24 16.43-32 38.22-32 15.72 0 29.18 7.3 35.12 19a8 8 0 1 1-14.27 7.22C145.64 91.94 137.65 88 128 88c-12.67 0-22.22 6.88-22.22 16 0 7 9 10.1 23.77 14.36C145.78 123 168 129.45 168 152Zm56-104v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16 160V48H48v160h160Z" />
  </Svg>
);
const Memo = memo(SvgStripeLogo);
export default Memo;
