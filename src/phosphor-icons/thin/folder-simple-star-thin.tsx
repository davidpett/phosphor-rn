import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleStarThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M36 64v136a4 4 0 0 0 4 4h80a4 4 0 0 1 0 8H40a12 12 0 0 1-12-12V64a12 12 0 0 1 12-12h53.33a12.05 12.05 0 0 1 7.2 2.4l27.74 20.8a4 4 0 0 0 2.4.8H216a12 12 0 0 1 12 12v32a4 4 0 0 1-8 0V88a4 4 0 0 0-4-4h-85.33a12.05 12.05 0 0 1-7.2-2.4L95.73 60.8a4 4 0 0 0-2.4-.8H40a4 4 0 0 0-4 4Zm198.55 100.7-24.46 20.19 7.46 30.11a4 4 0 0 1-1.49 4.17 4.05 4.05 0 0 1-2.39.79 4 4 0 0 1-2-.55L184 203.18l-27.64 16.27a4 4 0 0 1-5.91-4.41l7.46-30.15-24.46-20.19a4 4 0 0 1 2.24-7.08l32.24-2.49 12.4-28.72a4 4 0 0 1 7.34 0l12.4 28.72 32.24 2.49a4 4 0 0 1 2.24 7.08Zm-12.74.14L197 162.92a4 4 0 0 1-3.36-2.4L184 138.1l-9.68 22.42a4 4 0 0 1-3.36 2.4l-24.77 1.92L165 180.32a4 4 0 0 1 1.33 4.05l-5.78 23.36L182 195.09a4 4 0 0 1 4.06 0l21.47 12.64-5.78-23.36a4 4 0 0 1 1.33-4.05Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleStarThin);
export default Memo;
