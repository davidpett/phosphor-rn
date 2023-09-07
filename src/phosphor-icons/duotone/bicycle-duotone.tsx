import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBicycleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M248 160a40 40 0 1 1-40-40 40 40 0 0 1 40 40ZM48 120a40 40 0 1 0 40 40 40 40 0 0 0-40-40Z"
      opacity={0.2}
    />
    <Path d="M208 112a47.81 47.81 0 0 0-16.93 3.09L165.93 72H192a8 8 0 0 1 8 8 8 8 0 0 0 16 0 24 24 0 0 0-24-24h-40a8 8 0 0 0-6.91 12l11.65 20H99.26L82.91 60A8 8 0 0 0 76 56H48a8 8 0 0 0 0 16h23.41l13.71 23.51-15.71 21.55a48.13 48.13 0 1 0 12.92 9.44l11.59-15.9 31.17 53.4a8 8 0 1 0 13.82-8l-30.32-52h57.48l11.19 19.17A48 48 0 1 0 208 112ZM80 160a32 32 0 1 1-20.21-29.74l-18.25 25a8 8 0 1 0 12.92 9.42l18.25-25A31.88 31.88 0 0 1 80 160Zm128 32a32 32 0 0 1-22.51-54.72l15.6 26.72a8 8 0 1 0 13.82-8l-15.61-26.79A32 32 0 1 1 208 192Z" />
  </Svg>
);
const Memo = memo(SvgBicycleDuotone);
export default Memo;
