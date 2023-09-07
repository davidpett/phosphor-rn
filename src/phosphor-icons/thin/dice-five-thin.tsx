import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDiceFiveThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 36H64a28 28 0 0 0-28 28v128a28 28 0 0 0 28 28h128a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28Zm20 156a20 20 0 0 1-20 20H64a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20h128a20 20 0 0 1 20 20ZM100 92a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm36 36a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm36-36a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-72 72a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm72 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgDiceFiveThin);
export default Memo;
