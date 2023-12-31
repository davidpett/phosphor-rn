import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListMagnifyingGlassThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M36 64a4 4 0 0 1 4-4h176a4 4 0 0 1 0 8H40a4 4 0 0 1-4-4Zm4 68h72a4 4 0 0 0 0-8H40a4 4 0 0 0 0 8Zm88 56H40a4 4 0 0 0 0 8h88a4 4 0 0 0 0-8Zm106.83 6.83a4 4 0 0 1-5.66 0l-22.72-22.72a36.06 36.06 0 1 1 5.66-5.66l22.72 22.72a4 4 0 0 1 0 5.66ZM184 172a28 28 0 1 0-28-28 28 28 0 0 0 28 28Z" />
  </Svg>
);
const Memo = memo(SvgListMagnifyingGlassThin);
export default Memo;
