import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineDownLeft = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 40a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Zm-53.66 42.34L72 180.69V104a8 8 0 0 0-16 0v96a8 8 0 0 0 8 8h96a8 8 0 0 0 0-16H83.31l98.35-98.34a8 8 0 0 0-11.32-11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineDownLeft);
export default Memo;
