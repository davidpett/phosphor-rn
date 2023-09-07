import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDownRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m226.83 154.83-48 48a4 4 0 0 1-5.66-5.66L214.34 156H128A100.11 100.11 0 0 1 28 56a4 4 0 0 1 8 0 92.1 92.1 0 0 0 92 92h86.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDownRightThin);
export default Memo;
