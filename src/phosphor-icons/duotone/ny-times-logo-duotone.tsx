import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNyTimesLogoDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 112v112a79.58 79.58 0 0 1-32-6.66v-88.27Z" opacity={0.2} />
    <Path d="M172 136a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm12.62-32.75-65.71-30.66a71.95 71.95 0 0 0-62.85 68.71l68.18-36.36A8 8 0 0 1 136 112v103.55a71.64 71.64 0 0 0 60.71-50A8 8 0 0 1 212 170.4a88 88 0 1 1-160.26-70.3A36 36 0 0 1 68 32a8.05 8.05 0 0 1 3.38.75l118.25 55.18A20 20 0 0 0 188 48a8 8 0 0 1 0-16 36 36 0 0 1 0 72 8.05 8.05 0 0 1-3.38-.75ZM88 203.83V142.4l-30.49 16.26A72.15 72.15 0 0 0 88 203.83Zm32-78.5-16 8.54v78a71 71 0 0 0 16 3.67ZM96.13 62 66.37 48.07a20 20 0 0 0-5.2 38.71c.6-.71 1.2-1.42 1.84-2.11A88 88 0 0 1 96.13 62Z" />
  </Svg>
);
const Memo = memo(SvgNyTimesLogoDuotone);
export default Memo;
