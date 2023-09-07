import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlidersHorizontalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M32 80a8 8 0 0 1 8-8h37.17a28 28 0 0 1 53.66 0H216a8 8 0 0 1 0 16h-85.17a28 28 0 0 1-53.66 0H40a8 8 0 0 1-8-8Zm184 88h-21.17a28 28 0 0 0-53.66 0H40a8 8 0 0 0 0 16h101.17a28 28 0 0 0 53.66 0H216a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgSlidersHorizontalFill);
export default Memo;
