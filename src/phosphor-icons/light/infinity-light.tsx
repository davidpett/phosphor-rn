import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInfinityLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M246 128a54 54 0 0 1-92.18 38.18 3.07 3.07 0 0 1-.25-.26l-60-67.74a42 42 0 1 0 0 59.64l8.57-9.67a6 6 0 1 1 9 8l-8.69 9.81a3.07 3.07 0 0 1-.25.26 54 54 0 1 1 0-76.36 3.07 3.07 0 0 1 .25.26l60 67.74a42 42 0 1 0 0-59.64l-8.57 9.67a6 6 0 1 1-9-8l8.69-9.81a3.07 3.07 0 0 1 .25-.26A54 54 0 0 1 246 128Z" />
  </Svg>
);
const Memo = memo(SvgInfinityLight);
export default Memo;
