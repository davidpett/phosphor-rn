import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUpRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 64v104a4 4 0 0 1-8 0V73.66L66.83 194.83a4 4 0 0 1-5.66-5.66L182.34 68H88a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgArrowUpRightThin);
export default Memo;
