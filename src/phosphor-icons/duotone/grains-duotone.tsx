import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGrainsDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 64v56a80 80 0 0 0-80 80 80 80 0 0 0-80-80V64a79.67 79.67 0 0 1 36.05 8.59C95.62 40.19 128 24 128 24s32.39 16.19 44 48.58A79.6 79.6 0 0 1 208 64Z"
      opacity={0.2}
    />
    <Path d="M208 56a87.53 87.53 0 0 0-31.85 6c-14.32-29.7-43.25-44.46-44.57-45.13a8 8 0 0 0-7.16 0c-1.33.67-30.25 15.43-44.57 45.13A87.53 87.53 0 0 0 48 56a8 8 0 0 0-8 8v80a88 88 0 0 0 176 0V64a8 8 0 0 0-8-8Zm-88 159.56A72.1 72.1 0 0 1 56 144v-15.56A72.1 72.1 0 0 1 120 200Zm0-66.1a88 88 0 0 0-64-37.09V72.44A72.1 72.1 0 0 1 120 144ZM94.15 69.11c9.22-19.22 26.43-31.35 33.85-35.91 7.44 4.54 24.6 16.6 33.84 35.91A88.51 88.51 0 0 0 128 107.36a88.51 88.51 0 0 0-33.85-38.25ZM200 144a72.1 72.1 0 0 1-64 71.56V200a72.1 72.1 0 0 1 64-71.56Zm0-31.63a88 88 0 0 0-64 37.09V144a72.1 72.1 0 0 1 64-71.56Z" />
  </Svg>
);
const Memo = memo(SvgGrainsDuotone);
export default Memo;
