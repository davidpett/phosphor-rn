import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextOutdentDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M72 56v80L32 96Z" opacity={0.2} />
    <Path d="M224 128a8 8 0 0 1-8 8H112a8 8 0 0 1 0-16h104a8 8 0 0 1 8 8ZM112 72h104a8 8 0 0 0 0-16H112a8 8 0 0 0 0 16Zm104 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16ZM66.34 141.66l-40-40a8 8 0 0 1 0-11.32l40-40A8 8 0 0 1 80 56v80a8 8 0 0 1-13.66 5.66ZM64 75.31 43.31 96 64 116.69Z" />
  </Svg>
);
const Memo = memo(SvgTextOutdentDuotone);
export default Memo;
