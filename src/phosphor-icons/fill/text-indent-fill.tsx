import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextIndentFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8ZM112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16Zm104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16ZM36.94 143.39a8 8 0 0 0 8.72-1.73l40-40a8 8 0 0 0 0-11.32l-40-40A8 8 0 0 0 32 56v80a8 8 0 0 0 4.94 7.39Z" />
  </Svg>
);
const Memo = memo(SvgTextIndentFill);
export default Memo;
