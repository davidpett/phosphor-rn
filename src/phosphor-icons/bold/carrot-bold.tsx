import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCarrotBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 60h-19l19.51-19.51a12 12 0 1 0-17-17L196 43V24a12 12 0 0 0-24 0v26a68 68 0 0 0-76 13.87C55.45 103.68 25.18 197 21.78 207.77A20 20 0 0 0 40 236a20.12 20.12 0 0 0 8.24-1.78c7.64-2.42 56.79-18.34 98.91-41.82l.54-.3c17.1-9.57 33-20.39 44.44-32A68 68 0 0 0 206 84h26a12 12 0 0 0 0-24Zm-56.89 83.12-.09.09c-8.11 8.28-19.11 16.2-31.33 23.52l-23.21-23.21a12 12 0 1 0-17 17l18.22 18.22c-30.29 15.17-62.13 26.42-75.26 30.82 6.77-20.22 29.79-84.8 58.34-119.74l30.7 30.7a12 12 0 1 0 17-17l-29.94-29.94a44 44 0 0 1 52.57 69.54Z" />
  </Svg>
);
const Memo = memo(SvgCarrotBold);
export default Memo;
