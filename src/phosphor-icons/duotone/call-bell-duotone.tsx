import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCallBellDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 152v24H40v-24a88 88 0 0 1 176 0Z" opacity={0.2} />
    <Path d="M24 184h208a8 8 0 0 0 0-16h-8v-16a96.12 96.12 0 0 0-88-95.66V40h16a8 8 0 0 0 0-16h-48a8 8 0 0 0 0 16h16v16.34A96.12 96.12 0 0 0 32 152v16h-8a8 8 0 0 0 0 16Zm24-32a80 80 0 0 1 160 0v16H48Zm192 56a8 8 0 0 1-8 8H24a8 8 0 0 1 0-16h208a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgCallBellDuotone);
export default Memo;