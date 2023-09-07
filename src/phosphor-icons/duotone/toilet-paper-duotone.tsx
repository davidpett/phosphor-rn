import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToiletPaperDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M104 120c0 44.18-17.91 80-40 80s-40-35.82-40-80 17.91-80 40-80 40 35.82 40 80Z"
      opacity={0.2}
    />
    <Path d="M76 120a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm164 0v88a16 16 0 0 1-16 16H112a16 16 0 0 1-16-16v-21.65C87.37 200.37 76.18 208 64 208c-13.87 0-26.46-9.89-35.44-27.85C20.46 164 16 142.59 16 120s4.46-43.95 12.56-60.15C37.54 41.89 50.13 32 64 32h128c13.87 0 26.46 9.89 35.44 27.85C235.54 76.05 240 97.41 240 120Zm-144 0c0-42.43-16.86-72-32-72s-32 29.57-32 72 16.86 72 32 72 32-29.57 32-72Zm128 88v-80h-16a8 8 0 0 1 0-16h15.79c-1.95-38.1-17.63-64-31.79-64H92.12a73.6 73.6 0 0 1 7.32 11.85c7.14 14.28 11.44 32.56 12.37 52.15H128a8 8 0 0 1 0 16h-16v80Zm-48-96h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgToiletPaperDuotone);
export default Memo;
