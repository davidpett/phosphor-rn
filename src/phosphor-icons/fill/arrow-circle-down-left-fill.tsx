import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowCircleDownLeftFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm37.66 77.66L115.31 152H144a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8v-48a8 8 0 0 1 16 0v28.69l50.34-50.35a8 8 0 0 1 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgArrowCircleDownLeftFill);
export default Memo;
