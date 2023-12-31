import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 144H56l72-72Z" opacity={0.2} />
    <Path d="M133.66 66.34a8 8 0 0 0-11.32 0l-72 72A8 8 0 0 0 56 152h64v72a8 8 0 0 0 16 0v-72h64a8 8 0 0 0 5.66-13.66ZM75.31 136 128 83.31 180.69 136ZM224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpDuotone);
export default Memo;
