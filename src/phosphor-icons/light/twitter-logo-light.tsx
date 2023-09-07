import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTwitterLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M245.54 69.71A6 6 0 0 0 240 66h-31.6a46.6 46.6 0 0 0-40.33-24 44.93 44.93 0 0 0-32.31 13.12A45.92 45.92 0 0 0 122 88v8.66c-42-10-76.6-44.52-77-44.88a6 6 0 0 0-10.2 3.68c-4.25 47.22 9.42 78.75 21.64 96.89a107.71 107.71 0 0 0 23.07 25c-15.49 19-41.34 28.89-41.62 29a6 6 0 0 0-2.88 9C36 216.83 45.78 230 80 230c69.88 0 128.23-54 133.82-123.34l30.42-30.41a6 6 0 0 0 1.3-6.54Zm-41.78 30.05a6 6 0 0 0-1.75 3.86C197.93 167.76 144.33 218 80 218c-14 0-22.76-2.41-28.06-4.8 11.3-5.68 29.72-16.88 41.05-33.87a6 6 0 0 0 .85-4.67 6 6 0 0 0-2.84-3.84c-.13-.08-13.13-7.86-25-25.72C52 124 45.31 98.43 46 68.88c14.88 12.6 45.57 35.09 81 41a6 6 0 0 0 7-5.92V88a34 34 0 0 1 10.19-24.34A33.05 33.05 0 0 1 167.93 54c13.43.17 26 8.37 31.24 20.4a6 6 0 0 0 5.5 3.6h20.84Z" />
  </Svg>
);
const Memo = memo(SvgTwitterLogoLight);
export default Memo;
