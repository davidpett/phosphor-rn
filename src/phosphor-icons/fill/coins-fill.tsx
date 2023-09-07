import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCoinsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 89.57V84c0-25.08-37.83-44-88-44S8 58.92 8 84v40c0 20.89 26.25 37.49 64 42.46V172c0 25.08 37.83 44 88 44s88-18.92 88-44v-40c0-20.7-25.42-37.32-64-42.43Zm-128 57.3C36.41 141.4 24 132.39 24 124v-14.07c8.16 5.78 19.09 10.44 32 13.57Zm80-23.37c12.91-3.13 23.84-7.79 32-13.57V124c0 8.39-12.41 17.4-32 22.87Zm-16 71.37c-19.59-5.47-32-14.48-32-22.87v-4.17c2.63.1 5.29.17 8 .17 3.88 0 7.67-.13 11.39-.35a121.92 121.92 0 0 0 12.61 3.76Zm0-44.62A163 163 0 0 1 96 152a163 163 0 0 1-24-1.75v-23.79A183.74 183.74 0 0 0 96 128a183.74 183.74 0 0 0 24-1.54Zm64 48a165.45 165.45 0 0 1-48 0V174.4a179.48 179.48 0 0 0 24 1.6 183.74 183.74 0 0 0 24-1.54ZM232 172c0 8.39-12.41 17.4-32 22.87V171.5c12.91-3.13 23.84-7.79 32-13.57Z" />
  </Svg>
);
const Memo = memo(SvgCoinsFill);
export default Memo;
