import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsCurly = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M43.18 128a29.78 29.78 0 0 1 8 10.26c4.8 9.9 4.8 22 4.8 33.74 0 24.31 1 36 24 36a8 8 0 0 1 0 16c-17.48 0-29.32-6.14-35.2-18.26-4.8-9.9-4.8-22-4.8-33.74 0-24.31-1-36-24-36a8 8 0 0 1 0-16c23 0 24-11.69 24-36 0-11.72 0-23.84 4.8-33.74C50.68 38.14 62.52 32 80 32a8 8 0 0 1 0 16c-23 0-24 11.69-24 36 0 11.72 0 23.84-4.8 33.74A29.78 29.78 0 0 1 43.18 128ZM240 120c-23 0-24-11.69-24-36 0-11.72 0-23.84-4.8-33.74C205.32 38.14 193.48 32 176 32a8 8 0 0 0 0 16c23 0 24 11.69 24 36 0 11.72 0 23.84 4.8 33.74a29.78 29.78 0 0 0 8 10.26 29.78 29.78 0 0 0-8 10.26c-4.8 9.9-4.8 22-4.8 33.74 0 24.31-1 36-24 36a8 8 0 0 0 0 16c17.48 0 29.32-6.14 35.2-18.26 4.8-9.9 4.8-22 4.8-33.74 0-24.31 1-36 24-36a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgBracketsCurly);
export default Memo;
