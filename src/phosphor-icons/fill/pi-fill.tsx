import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPiFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-36 136a12 12 0 0 0 12-12 8 8 0 0 1 16 0 28 28 0 0 1-56 0V96h-32v80a8 8 0 0 1-16 0V96h-8a24 24 0 0 0-24 24 8 8 0 0 1-16 0 40 40 0 0 1 40-40h104a8 8 0 0 1 0 16h-32v60a12 12 0 0 0 12 12Z" />
  </Svg>
);
const Memo = memo(SvgPiFill);
export default Memo;
