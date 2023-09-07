import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgParallelogramFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m246.58 62.57-64.8 144a16 16 0 0 1-14.59 9.43H24a16 16 0 0 1-14.58-22.57l64.8-144A16 16 0 0 1 88.81 40H232a16 16 0 0 1 14.59 22.57Z" />
  </Svg>
);
const Memo = memo(SvgParallelogramFill);
export default Memo;
