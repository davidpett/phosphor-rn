import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMagnifyingGlassFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 112a56 56 0 1 1-56-56 56 56 0 0 1 56 56Zm61.66 117.66a8 8 0 0 1-11.32 0l-50.06-50.07a88 88 0 1 1 11.32-11.31l50.06 50.06a8 8 0 0 1 0 11.32ZM112 184a72 72 0 1 0-72-72 72.08 72.08 0 0 0 72 72Z" />
  </Svg>
);
const Memo = memo(SvgMagnifyingGlassFill);
export default Memo;
