import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToggleLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 128a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z" opacity={0.2} />
    <Path d="M176 56H80a72 72 0 0 0 0 144h96a72 72 0 0 0 0-144Zm0 128H80a56 56 0 0 1 0-112h96a56 56 0 0 1 0 112ZM80 88a40 40 0 1 0 40 40 40 40 0 0 0-40-40Zm0 64a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgToggleLeftDuotone);
export default Memo;
