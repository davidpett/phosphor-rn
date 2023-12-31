import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMagnifyingGlassMinusDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 112a80 80 0 1 1-80-80 80 80 0 0 1 80 80Z" opacity={0.2} />
    <Path d="m229.66 218.34-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72Zm112 0a8 8 0 0 1-8 8H80a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgMagnifyingGlassMinusDuotone);
export default Memo;
