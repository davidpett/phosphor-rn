import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTipiBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m242.11 209.53-99.86-156 19.86-31a12 12 0 1 0-20.22-13L128 31.24 114.11 9.53a12 12 0 0 0-20.22 12.94l19.86 31-99.86 156A12 12 0 0 0 24 228h208a12 12 0 0 0 10.11-18.47ZM96.17 204 128 154.26 159.83 204Zm92.16 0-50.22-78.47a12 12 0 0 0-20.22 0L67.67 204H45.93L128 75.76 210.07 204Z" />
  </Svg>
);
const Memo = memo(SvgTipiBold);
export default Memo;
