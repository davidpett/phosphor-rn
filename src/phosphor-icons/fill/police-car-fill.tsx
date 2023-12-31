import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPoliceCarFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M96 32a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8Zm152 88a8 8 0 0 1-8 8h-8v80a16 16 0 0 1-16 16h-24a16 16 0 0 1-16-16v-16H80v16a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16v-80h-8a8 8 0 0 1 0-16h11.36l27.39-47.94A16 16 0 0 1 68.64 56h118.72a16 16 0 0 1 13.89 8.06L228.64 112H240a8 8 0 0 1 8 8ZM88 152a8 8 0 0 0-8-8H64a8 8 0 0 0 0 16h16a8 8 0 0 0 8-8Zm112 0a8 8 0 0 0-8-8h-16a8 8 0 0 0 0 16h16a8 8 0 0 0 8-8Z" />
  </Svg>
);
const Memo = memo(SvgPoliceCarFill);
export default Memo;
