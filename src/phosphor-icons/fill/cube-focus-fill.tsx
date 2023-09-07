import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCubeFocusFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M178.59 90.22 128 119.43 77.41 90.22a4 4 0 0 1 0-6.93l44.35-25.61a12.48 12.48 0 0 1 12.48 0l44.35 25.61a4 4 0 0 1 0 6.93ZM64 107.88v49.55a13 13 0 0 0 6.42 11.24L114 193.84a4 4 0 0 0 6-3.46v-57.09l-50-28.87a4 4 0 0 0-6 3.46Zm128 49.55v-49.55a4 4 0 0 0-6-3.46l-50 28.87v57.09a4 4 0 0 0 6 3.46l43.57-25.17a13 13 0 0 0 6.43-11.24ZM224 40h-40a8 8 0 0 0 0 16h32v32a8 8 0 0 0 16 0V48a8 8 0 0 0-8-8ZM72 200H40v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16Zm152-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8ZM32 96a8 8 0 0 0 8-8V56h32a8 8 0 0 0 0-16H32a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8Z" />
  </Svg>
);
const Memo = memo(SvgCubeFocusFill);
export default Memo;
