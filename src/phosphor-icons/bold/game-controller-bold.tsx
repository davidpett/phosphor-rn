import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGameControllerBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 116h-24a12 12 0 0 1 0-24h24a12 12 0 0 1 0 24Zm-72-24h-4v-4a12 12 0 0 0-24 0v4h-4a12 12 0 0 0 0 24h4v4a12 12 0 0 0 24 0v-4h4a12 12 0 0 0 0-24Zm140.76 110.94a40 40 0 0 1-61 5.35 7 7 0 0 1-.53-.56L144.67 164h-33.34l-38.52 43.73c-.17.19-.35.38-.53.56a40 40 0 0 1-67.66-35.24 1.18 1.18 0 0 1 0-.2L21 88.79A63.88 63.88 0 0 1 83.88 36H172a64.08 64.08 0 0 1 62.93 52.48 1.8 1.8 0 0 1 0 .19l16.36 84.17a1.77 1.77 0 0 1 0 .2 39.74 39.74 0 0 1-6.53 29.9ZM172 140a40 40 0 0 0 0-80H83.89a39.9 39.9 0 0 0-39.27 33.06 1.55 1.55 0 0 0 0 .21l-16.34 84a16 16 0 0 0 13 18.44 16.07 16.07 0 0 0 13.86-4.21l41.76-47.43a12 12 0 0 1 9-4.07Zm55.76 37.31-7-35.95a63.84 63.84 0 0 1-44.27 22.46l24.41 27.72a16 16 0 0 0 26.85-14.23Z" />
  </Svg>
);
const Memo = memo(SvgGameControllerBold);
export default Memo;
