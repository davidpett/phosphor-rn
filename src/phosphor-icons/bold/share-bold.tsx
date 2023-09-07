import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShareBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m232.49 112.49-48 48a12 12 0 0 1-17-17L195 116h-30a84 84 0 0 0-81.36 63 12 12 0 1 1-23.24-6A107.94 107.94 0 0 1 165 92h30l-27.49-27.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01ZM192 204H44V88a12 12 0 0 0-24 0v120a20 20 0 0 0 20 20h152a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgShareBold);
export default Memo;
