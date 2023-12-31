import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileyXEyesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm58.83-121.17L173.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L168 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L162.34 112l-13.17-13.17a4 4 0 0 1 5.66-5.66L168 106.34l13.17-13.17a4 4 0 1 1 5.66 5.66Zm-80 0L93.66 112l13.17 13.17a4 4 0 0 1-5.66 5.66L88 117.66l-13.17 13.17a4 4 0 0 1-5.66-5.66L82.34 112 69.17 98.83a4 4 0 0 1 5.66-5.66L88 106.34l13.17-13.17a4 4 0 0 1 5.66 5.66ZM136 180a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgSmileyXEyesThin);
export default Memo;
