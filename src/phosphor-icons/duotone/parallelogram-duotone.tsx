import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgParallelogramDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m239.29 59.28-64.8 144a8 8 0 0 1-7.3 4.72H24a8 8 0 0 1-7.3-11.28l64.8-144A8 8 0 0 1 88.81 48H232a8 8 0 0 1 7.29 11.28Z"
      opacity={0.2}
    />
    <Path d="M245.43 47.31A15.94 15.94 0 0 0 232 40H88.81a16 16 0 0 0-14.59 9.43l-64.8 144A16 16 0 0 0 24 216h143.19a16 16 0 0 0 14.59-9.43l64.8-144a16 16 0 0 0-1.15-15.26ZM167.19 200H24L88.81 56H232Z" />
  </Svg>
);
const Memo = memo(SvgParallelogramDuotone);
export default Memo;
