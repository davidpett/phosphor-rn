import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSortAscendingThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M124 128a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4ZM48 68h136a4 4 0 0 0 0-8H48a4 4 0 0 0 0 8Zm56 120H48a4 4 0 0 0 0 8h56a4 4 0 0 0 0-8Zm122.83-22.83a4 4 0 0 0-5.66 0L188 198.34V112a4 4 0 0 0-8 0v86.34l-33.17-33.17a4 4 0 0 0-5.66 5.66l40 40a4 4 0 0 0 5.66 0l40-40a4 4 0 0 0 0-5.66Z" />
  </Svg>
);
const Memo = memo(SvgSortAscendingThin);
export default Memo;
