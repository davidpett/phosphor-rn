import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSortDescendingFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M40 128a8 8 0 0 1 8-8h72a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8Zm8-56h56a8 8 0 0 0 0-16H48a8 8 0 0 0 0 16Zm136 112H48a8 8 0 0 0 0 16h136a8 8 0 0 0 0-16Zm45.66-101.66-40-40a8 8 0 0 0-11.32 0l-40 40A8 8 0 0 0 144 96h32v48a8 8 0 0 0 16 0V96h32a8 8 0 0 0 5.66-13.66Z" />
  </Svg>
);
const Memo = memo(SvgSortDescendingFill);
export default Memo;
