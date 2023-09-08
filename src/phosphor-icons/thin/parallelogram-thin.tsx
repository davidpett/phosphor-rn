import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgParallelogramThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M242.07 49.48A12 12 0 0 0 232 44H88.81a12 12 0 0 0-11 7.08l-64.8 144A12 12 0 0 0 24 212h143.19a12 12 0 0 0 10.95-7.08l64.8-144a12 12 0 0 0-.87-11.44Zm-6.43 8.16-64.8 144a4 4 0 0 1-3.65 2.36H24a4 4 0 0 1-3.65-5.64l64.8-144A4 4 0 0 1 88.81 52H232a4 4 0 0 1 3.65 5.64Z" />
  </Svg>
);
const Memo = memo(SvgParallelogramThin);
export default Memo;
