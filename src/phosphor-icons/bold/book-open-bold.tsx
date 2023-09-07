import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBookOpenBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 44h-64a43.86 43.86 0 0 0-32 13.85A43.86 43.86 0 0 0 96 44H32a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h64a20 20 0 0 1 20 20 12 12 0 0 0 24 0 20 20 0 0 1 20-20h64a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20ZM96 188H36V68h60a20 20 0 0 1 20 20v104.81A43.79 43.79 0 0 0 96 188Zm124 0h-60a43.71 43.71 0 0 0-20 4.83V88a20 20 0 0 1 20-20h60Z" />
  </Svg>
);
const Memo = memo(SvgBookOpenBold);
export default Memo;
