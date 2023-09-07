import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInLineHorizontalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M101.66 122.34a8 8 0 0 1 0 11.32l-32 32A8 8 0 0 1 56 160v-24H16a8 8 0 0 1 0-16h40V96a8 8 0 0 1 13.66-5.66ZM240 120h-40V96a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32l32 32A8 8 0 0 0 200 160v-24h40a8 8 0 0 0 0-16ZM128 32a8 8 0 0 0-8 8v176a8 8 0 0 0 16 0V40a8 8 0 0 0-8-8Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInLineHorizontalFill);
export default Memo;
