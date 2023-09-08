import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPenNibThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 100.68a11.93 11.93 0 0 0-3.51-8.48L163.8 23.51a12 12 0 0 0-17 0l-29.02 29.05-58.86 22.07a12.06 12.06 0 0 0-7.63 9.26L28.05 223.34A4 4 0 0 0 32 228a4.89 4.89 0 0 0 .66-.05L172.1 204.7a12 12 0 0 0 9.27-7.62l22.07-58.86 29-29a11.92 11.92 0 0 0 3.56-8.54Zm-62.12 93.59a4 4 0 0 1-3.09 2.54L43.66 218l58.45-58.45a24 24 0 1 0-5.66-5.66L38 212.35 59.19 85.21a4 4 0 0 1 2.54-3.09L119 60.64 195.35 137ZM100 140a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm126.83-36.49L200 130.34 125.66 56l26.82-26.82a4 4 0 0 1 5.66 0l68.69 68.69a4 4 0 0 1 0 5.65Z" />
  </Svg>
);
const Memo = memo(SvgPenNibThin);
export default Memo;
