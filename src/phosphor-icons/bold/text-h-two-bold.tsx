import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextHTwoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M156 56v120a12 12 0 0 1-24 0v-48H52v48a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0v48h80V56a12 12 0 0 1 24 0Zm84 140h-24l28.74-38.33A36 36 0 1 0 182.05 124a12 12 0 0 0 22.63 8 11.67 11.67 0 0 1 1.73-3.22 12 12 0 1 1 19.15 14.46L182.4 200.8A12 12 0 0 0 192 220h48a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgTextHTwoBold);
export default Memo;
