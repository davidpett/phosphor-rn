import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPresentationChart = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40h-80V24a8 8 0 0 0-16 0v16H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h39.36l-21.61 27a8 8 0 0 0 12.5 10l29.59-37h56.32l29.59 37a8 8 0 1 0 12.5-10l-21.61-27H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 136H40V56h176v120Zm-112-56v24a8 8 0 0 1-16 0v-24a8 8 0 0 1 16 0Zm32-16v40a8 8 0 0 1-16 0v-40a8 8 0 0 1 16 0Zm32-16v56a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgPresentationChart);
export default Memo;
