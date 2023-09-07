import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowDownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m202.83 146.83-72 72a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L124 206.34V40a4 4 0 0 1 8 0v166.34l65.17-65.17a4 4 0 0 1 5.66 5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowDownThin);
export default Memo;
