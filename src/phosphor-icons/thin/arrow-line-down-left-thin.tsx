import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineDownLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 40a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4Zm-46.83 45.17L68 190.34V104a4 4 0 0 0-8 0v96a4 4 0 0 0 4 4h96a4 4 0 0 0 0-8H73.66L178.83 90.83a4 4 0 1 0-5.66-5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineDownLeftThin);
export default Memo;
