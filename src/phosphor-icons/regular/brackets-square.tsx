import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsSquare = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M48 48v160h32a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8V40a8 8 0 0 1 8-8h40a8 8 0 0 1 0 16Zm168-16h-40a8 8 0 0 0 0 16h32v160h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgBracketsSquare);
export default Memo;
