import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMagnifyingGlassMinusBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 112a12 12 0 0 1-12 12H80a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12Zm76.49 120.49a12 12 0 0 1-17 0L168 185a92.12 92.12 0 1 1 17-17l47.54 47.53a12 12 0 0 1-.05 16.96ZM112 180a68 68 0 1 0-68-68 68.08 68.08 0 0 0 68 68Z" />
  </Svg>
);
const Memo = memo(SvgMagnifyingGlassMinusBold);
export default Memo;
