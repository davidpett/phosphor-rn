import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPencilLineFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m227.32 73.37-44.69-44.68a16 16 0 0 0-22.63 0L36.69 152A15.86 15.86 0 0 0 32 163.31V208a16 16 0 0 0 16 16h168a8 8 0 0 0 0-16H115.32l112-112a16 16 0 0 0 0-22.63ZM79.32 188l90.34-90.34 16.69 16.68L96 204.69Zm79-101.66L68 176.69 51.31 160l90.35-90.34ZM48 179.31 76.69 208H48Z" />
  </Svg>
);
const Memo = memo(SvgPencilLineFill);
export default Memo;
