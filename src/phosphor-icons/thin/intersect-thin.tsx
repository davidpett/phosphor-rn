import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIntersectThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M171.17 84.83a76 76 0 1 0-86.34 86.34 76 76 0 1 0 86.34-86.34ZM28 96a68 68 0 0 1 134.93-11.93c-1 0-2-.07-2.93-.07a76.08 76.08 0 0 0-76 76c0 1 0 2 .07 2.93A68.1 68.1 0 0 1 28 96Zm136 0a67.59 67.59 0 0 1-7.45 30.89l-27.44-27.44A67.59 67.59 0 0 1 160 92c1.3 0 2.6 0 3.88.12.12 1.28.12 2.58.12 3.88Zm-72 64a67.59 67.59 0 0 1 7.45-30.89l27.44 27.44A67.59 67.59 0 0 1 96 164c-1.3 0-2.6-.05-3.88-.12-.07-1.28-.12-2.58-.12-3.88Zm42-7.64L103.64 122A68.74 68.74 0 0 1 122 103.64L152.36 134A68.74 68.74 0 0 1 134 152.36ZM160 228a68.1 68.1 0 0 1-66.93-56.07c1 0 2 .07 2.93.07a76.08 76.08 0 0 0 76-76c0-1 0-2-.07-2.93A68 68 0 0 1 160 228Z" />
  </Svg>
);
const Memo = memo(SvgIntersectThin);
export default Memo;
