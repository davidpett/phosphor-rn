import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUsersFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164.47 195.63a8 8 0 0 1-6.7 12.37H10.23a8 8 0 0 1-6.7-12.37 95.83 95.83 0 0 1 47.22-37.71 60 60 0 1 1 66.5 0 95.83 95.83 0 0 1 47.22 37.71Zm87.91-.15a95.87 95.87 0 0 0-47.13-37.56A60 60 0 0 0 144.7 54.59a4 4 0 0 0-1.33 6 75.83 75.83 0 0 1 3.63 89.94 4 4 0 0 0 1.07 5.53 112.32 112.32 0 0 1 29.85 30.83 23.92 23.92 0 0 1 3.65 16.47 4 4 0 0 0 3.95 4.64h60.3a8 8 0 0 0 7.73-5.93 8.22 8.22 0 0 0-1.17-6.59Z" />
  </Svg>
);
const Memo = memo(SvgUsersFill);
export default Memo;
