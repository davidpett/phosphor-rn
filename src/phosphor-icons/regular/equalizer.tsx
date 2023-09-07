import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEqualizer = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 96a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8Zm-8 24H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm0 32H24a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm80-64h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm80-96h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm-48-16h48a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16Zm48 48h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Zm0 32h-48a8 8 0 0 0 0 16h48a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgEqualizer);
export default Memo;
