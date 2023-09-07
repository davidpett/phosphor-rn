import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGogglesFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 64H72a72.08 72.08 0 0 0-72 72 24.06 24.06 0 0 0 17 23c6.06 20.37 37.63 33 55 33a40.07 40.07 0 0 0 39.2-32h33.6a40.07 40.07 0 0 0 39.2 32c17.33 0 48.9-12.66 55-33a24.06 24.06 0 0 0 17-23 72.08 72.08 0 0 0-72-72ZM89 169a8 8 0 0 1-11.31 0l-24.55-24.55a8 8 0 0 1 11.31-11.31L89 157.65A8 8 0 0 1 89 169Zm119.52-.49a8 8 0 0 1-11.31 0l-25.41-25.4a8 8 0 0 1 11.32-11.32l25.4 25.41a8 8 0 0 1-.04 11.28Zm29.2-26.86C229.34 123.25 200.34 112 184 112a40.07 40.07 0 0 0-39.2 32h-33.6A40.07 40.07 0 0 0 72 112c-16.34 0-45.34 11.25-53.68 29.62A8 8 0 0 1 16 136a56.06 56.06 0 0 1 56-56h112a56.06 56.06 0 0 1 56 56 8 8 0 0 1-2.32 5.62Z" />
  </Svg>
);
const Memo = memo(SvgGogglesFill);
export default Memo;
