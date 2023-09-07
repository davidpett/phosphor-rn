import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowRightUpThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M226.83 98.83a4 4 0 0 1-5.66 0L180 57.66V192a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h140V57.66l-41.17 41.17a4 4 0 1 1-5.66-5.66l48-48a4 4 0 0 1 5.66 0l48 48a4 4 0 0 1 0 5.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowRightUpThin);
export default Memo;
