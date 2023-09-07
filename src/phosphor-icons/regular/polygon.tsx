import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPolygon = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230.64 49.36a32 32 0 0 0-45.26 0 31.9 31.9 0 0 0-5.16 6.76L152 48.42a32 32 0 0 0-54.63-23.06 32.06 32.06 0 0 0-5.76 37.41L57.67 93.32a32.05 32.05 0 0 0-40.31 4.05 32 32 0 0 0 42.89 47.41l70 51.36a32 32 0 1 0 47.57-14.69l27.39-77.59q1.38.12 2.76.12a32 32 0 0 0 22.63-54.62Zm-122-12.69a16 16 0 1 1 0 22.64 16 16 0 0 1 .04-22.64Zm-80 94.65a16 16 0 0 1 0-22.64 16 16 0 1 1 0 22.64Zm142.65 88a16 16 0 0 1-22.63-22.63 16 16 0 1 1 22.63 22.63Zm-8.55-43.18a32 32 0 0 0-23 7.08l-70-51.36a32.17 32.17 0 0 0-1.34-26.65l33.95-30.55a32 32 0 0 0 45.47-10.81L176 71.56a32 32 0 0 0 14.12 27ZM219.3 83.3a16 16 0 1 1-22.6-22.62 16 16 0 0 1 22.63 22.63Z" />
  </Svg>
);
const Memo = memo(SvgPolygon);
export default Memo;