import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBicycleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m54.46 164.71 27.87-38.21a48 48 0 1 1-12.92-9.44l-27.87 38.23a8 8 0 1 0 12.92 9.42ZM208 112a47.81 47.81 0 0 0-16.93 3.09L214.91 156a8 8 0 1 1-13.82 8l-23.83-40.86A48 48 0 1 0 208 112Zm-42.07-40H192a8 8 0 0 1 8 8 8 8 0 0 0 16 0 24 24 0 0 0-24-24h-40a8 8 0 0 0-6.91 12l11.65 20H99.26L82.91 60A8 8 0 0 0 76 56H48a8 8 0 0 0 0 16h23.41l13.71 23.51-15.71 21.55a47.87 47.87 0 0 1 12.92 9.44l11.59-15.9 31.17 53.4a8 8 0 1 0 13.82-8l-30.32-52h57.48l11.19 19.17a48.11 48.11 0 0 1 13.81-8.08Z" />
  </Svg>
);
const Memo = memo(SvgBicycleFill);
export default Memo;
