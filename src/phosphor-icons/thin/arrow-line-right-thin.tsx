import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M186.83 125.17a4 4 0 0 1 0 5.66l-72 72a4 4 0 0 1-5.66-5.66L174.34 132H32a4 4 0 0 1 0-8h142.34l-65.17-65.17a4 4 0 0 1 5.66-5.66ZM216 36a4 4 0 0 0-4 4v176a4 4 0 0 0 8 0V40a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineRightThin);
export default Memo;
