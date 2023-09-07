import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToggleRight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144Zm0 128H80a56 56 0 0 1 0-112h96a56 56 0 0 1 0 112Zm0-96a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgToggleRight);
export default Memo;
