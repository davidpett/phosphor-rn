import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSunglasses = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 40a8 8 0 0 0 0 16 16 16 0 0 1 16 16v56H40V72a16 16 0 0 1 16-16 8 8 0 0 0 0-16 32 32 0 0 0-32 32v92a44 44 0 0 0 88 0v-20h32v20a44 44 0 0 0 88 0V72a32 32 0 0 0-32-32Zm12.63 137.31L179.31 144H216v20a27.8 27.8 0 0 1-3.37 13.31ZM40 164v-16.69l41.31 41.32A28 28 0 0 1 40 164Zm56 0a27.8 27.8 0 0 1-3.37 13.31L59.31 144H96Zm64 0v-16.69l41.31 41.32A28 28 0 0 1 160 164Z" />
  </Svg>
);
const Memo = memo(SvgSunglasses);
export default Memo;
