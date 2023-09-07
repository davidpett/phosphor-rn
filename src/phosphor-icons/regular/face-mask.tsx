import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFaceMask = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 104a8 8 0 0 1-8 8H88a8 8 0 0 1 0-16h80a8 8 0 0 1 8 8Zm-8 24H88a8 8 0 0 0 0 16h80a8 8 0 0 0 0-16Zm88-24v24a32 32 0 0 1-32 32h-5.13c-6.54 14.44-19.26 27.12-37.7 37.36-21 11.68-43.52 17-49.92 18.3a15.7 15.7 0 0 1-6.5 0c-6.4-1.34-28.9-6.62-49.92-18.3-18.44-10.24-31.16-22.92-37.7-37.36H32a32 32 0 0 1-32-32v-24a32 32 0 0 1 32-32h.85a16 16 0 0 1 9.68-10l80-29.09a16.06 16.06 0 0 1 10.94 0l80 29.09a16 16 0 0 1 9.68 10h.85a32 32 0 0 1 32 32ZM32.53 144a59.94 59.94 0 0 1-.53-7.85V88a16 16 0 0 0-16 16v24a16 16 0 0 0 16 16ZM208 136.15V77.09L128 48 48 77.09v59.06c0 45.76 71.84 62.13 80 63.85 8.16-1.72 80-18.09 80-63.85ZM240 104a16 16 0 0 0-16-16v48.15a59.94 59.94 0 0 1-.53 7.85h.53a16 16 0 0 0 16-16Z" />
  </Svg>
);
const Memo = memo(SvgFaceMask);
export default Memo;
