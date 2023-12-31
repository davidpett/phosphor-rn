import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendRightDownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m202.83 178.83-48 48a4 4 0 0 1-5.66 0l-48-48a4 4 0 0 1 5.66-5.66L148 214.34V128a92.1 92.1 0 0 0-92-92 4 4 0 0 1 0-8 100.11 100.11 0 0 1 100 100v86.34l41.17-41.17a4 4 0 0 1 5.66 5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendRightDownThin);
export default Memo;
