import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserMinusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M254 136a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Zm-57.41 60.14a6 6 0 1 1-9.18 7.72C166.9 179.45 138.69 166 108 166s-58.89 13.45-79.41 37.86a6 6 0 0 1-9.18-7.72C35.14 177.41 55 164.48 77 158.26a66 66 0 1 1 62 0c22 6.22 41.86 19.15 57.59 37.88ZM108 154a54 54 0 1 0-54-54 54.06 54.06 0 0 0 54 54Z" />
  </Svg>
);
const Memo = memo(SvgUserMinusLight);
export default Memo;
