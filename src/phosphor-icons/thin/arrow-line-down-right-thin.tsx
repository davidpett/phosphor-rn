import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineDownRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M220 40a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4Zm-28 60a4 4 0 0 0-4 4v86.34L82.83 85.17a4 4 0 0 0-5.66 5.66L182.34 196H96a4 4 0 0 0 0 8h96a4 4 0 0 0 4-4v-96a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineDownRightThin);
export default Memo;
