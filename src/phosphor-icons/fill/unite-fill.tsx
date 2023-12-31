import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUniteFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M64 160c0 3.2.16 6.37.47 9.49a80 80 0 1 1 105-105c-3.12-.31-6.29-.47-9.49-.47A96.11 96.11 0 0 0 64 160Zm112-64a79.22 79.22 0 0 0-1.37-14.63A79.22 79.22 0 0 0 160 80a80.09 80.09 0 0 0-80 80 79.22 79.22 0 0 0 1.37 14.63A79.22 79.22 0 0 0 96 176a80.09 80.09 0 0 0 80-80Zm15.53-9.49c.31 3.12.47 6.29.47 9.49a96.11 96.11 0 0 1-96 96c-3.2 0-6.37-.16-9.49-.47a80 80 0 1 0 105-105Z" />
  </Svg>
);
const Memo = memo(SvgUniteFill);
export default Memo;
