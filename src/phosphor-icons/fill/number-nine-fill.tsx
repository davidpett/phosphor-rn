import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberNineFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm-33.7 105.62L132.62 188a8 8 0 0 1-13.86-8l16.52-28.61a44.79 44.79 0 0 1-7.28.61 44.05 44.05 0 1 1 38.3-22.38ZM156 108a28 28 0 1 1-28-28 28 28 0 0 1 28 28Z" />
  </Svg>
);
const Memo = memo(SvgNumberNineFill);
export default Memo;
