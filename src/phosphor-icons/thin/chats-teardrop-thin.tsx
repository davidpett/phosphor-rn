import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatsTeardropThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M166.76 76.32A76 76 0 0 0 20 104v66a10 10 0 0 0 10 10h59.33A76.13 76.13 0 0 0 160 228h66a10 10 0 0 0 10-10v-66a76 76 0 0 0-69.24-75.68ZM28 170v-66a68 68 0 1 1 68 68H30a2 2 0 0 1-2-2Zm200 48a2 2 0 0 1-2 2h-66a68.16 68.16 0 0 1-62-40 76 76 0 0 0 71.5-95.33A68 68 0 0 1 228 152Z" />
  </Svg>
);
const Memo = memo(SvgChatsTeardropThin);
export default Memo;
