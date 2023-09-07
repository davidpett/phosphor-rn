import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowDownLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 192H64V88Z" opacity={0.2} />
    <Path d="M197.66 58.34a8 8 0 0 0-11.32 0L116 128.69 69.66 82.34A8 8 0 0 0 56 88v104a8 8 0 0 0 8 8h104a8 8 0 0 0 5.66-13.66L127.31 140l70.35-70.34a8 8 0 0 0 0-11.32ZM72 184v-76.69l38.34 38.34L148.69 184Z" />
  </Svg>
);
const Memo = memo(SvgArrowDownLeftDuotone);
export default Memo;
