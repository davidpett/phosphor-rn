import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCheckSquareOffsetFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m125.66 165.66-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L64 204.69l50.34-50.35a8 8 0 0 1 11.32 11.32ZM208 32H48a16 16 0 0 0-16 16v108.23a4 4 0 0 0 4.41 4 32 32 0 0 1 26.22 9.16 1.93 1.93 0 0 0 2.74 0l32-32a32 32 0 0 1 45.26 45.26l-34.55 34.54a4 4 0 0 0 2.83 6.83H208a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Z" />
  </Svg>
);
const Memo = memo(SvgCheckSquareOffsetFill);
export default Memo;
