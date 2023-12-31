import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBracketsAngleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m232 128-56 88H80l-56-88 56-88h96Z" opacity={0.2} />
    <Path d="M86.75 44.3 33.48 128l53.27 83.7a8 8 0 0 1-2.46 11.05A7.91 7.91 0 0 1 80 224a8 8 0 0 1-6.76-3.71l-56-88a8 8 0 0 1 0-8.59l56-88a8 8 0 1 1 13.5 8.59Zm152 79.41-56-88a8 8 0 1 0-13.5 8.59l53.27 83.7-53.27 83.7a8 8 0 0 0 2.46 11.05A7.91 7.91 0 0 0 176 224a8 8 0 0 0 6.76-3.71l56-88a8 8 0 0 0-.01-8.58Z" />
  </Svg>
);
const Memo = memo(SvgBracketsAngleDuotone);
export default Memo;
