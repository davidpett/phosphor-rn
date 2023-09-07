import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMagnifyingGlassThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m226.83 221.17-52.7-52.7a84.1 84.1 0 1 0-5.66 5.66l52.7 52.7a4 4 0 0 0 5.66-5.66ZM36 112a76 76 0 1 1 76 76 76.08 76.08 0 0 1-76-76Z" />
  </Svg>
);
const Memo = memo(SvgMagnifyingGlassThin);
export default Memo;
