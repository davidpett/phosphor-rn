import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCornersIn = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M152 96V48a8 8 0 0 1 16 0v40h40a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8Zm-56 56H48a8 8 0 0 0 0 16h40v40a8 8 0 0 0 16 0v-48a8 8 0 0 0-8-8Zm112 0h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 16 0v-40h40a8 8 0 0 0 0-16ZM96 40a8 8 0 0 0-8 8v40H48a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgCornersIn);
export default Memo;
