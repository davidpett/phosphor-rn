import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBoatDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 125.82v34.28c-14.57 51.07-82.23 68.91-94.19 71.69a7.91 7.91 0 0 1-3.62 0C114.23 229 46.57 211.17 32 160.1v-34.28a8 8 0 0 1 5.47-7.6L128 88l90.53 30.22a8 8 0 0 1 5.47 7.6Z"
      opacity={0.2}
    />
    <Path d="M221.06 110.63 208 106.27V56a16 16 0 0 0-16-16h-56V24a8 8 0 0 0-16 0v16H64a16 16 0 0 0-16 16v50.27l-13.06 4.36A16 16 0 0 0 24 125.82v34.28a7.73 7.73 0 0 0 .31 2.19c15.72 55.09 86.12 74.06 100.07 77.3a16.19 16.19 0 0 0 7.24 0c13.95-3.24 84.35-22.21 100.07-77.3a7.73 7.73 0 0 0 .31-2.19v-34.28a16 16 0 0 0-10.94-15.19ZM64 56h128v44.93l-61.47-20.52a8 8 0 0 0-5.06 0L64 100.93Zm152 102.94c-5.78 19-20.55 35.17-43.95 48.12A181.7 181.7 0 0 1 128 224a181.7 181.7 0 0 1-44-16.94c-23.44-12.95-38.22-29.13-44-48.12v-33.13l80-26.7V168a8 8 0 0 0 16 0V99.11l80 26.71Z" />
  </Svg>
);
const Memo = memo(SvgBoatDuotone);
export default Memo;
