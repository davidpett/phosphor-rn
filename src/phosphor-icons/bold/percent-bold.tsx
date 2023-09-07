import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPercentBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m208.49 64.47-144 144a12 12 0 1 1-17-17l144-144a12 12 0 0 1 17 17Zm-160.77 39.8A40 40 0 1 1 76 116a39.72 39.72 0 0 1-28.28-11.73ZM60 76a16 16 0 1 0 4.69-11.31A15.87 15.87 0 0 0 60 76Zm160 104a40 40 0 1 1-11.72-28.29A39.71 39.71 0 0 1 220 180Zm-24 0a15.87 15.87 0 0 0-4.69-11.32A16 16 0 1 0 196 180Z" />
  </Svg>
);
const Memo = memo(SvgPercentBold);
export default Memo;
