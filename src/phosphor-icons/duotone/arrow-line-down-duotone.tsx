import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineDownDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m200 112-72 72-72-72Z" opacity={0.2} />
    <Path d="M122.34 189.66a8 8 0 0 0 11.32 0l72-72A8 8 0 0 0 200 104h-64V32a8 8 0 0 0-16 0v72H56a8 8 0 0 0-5.66 13.66ZM180.69 120 128 172.69 75.31 120ZM224 216a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineDownDuotone);
export default Memo;
