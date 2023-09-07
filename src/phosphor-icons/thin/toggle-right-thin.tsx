import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToggleRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 60H80a68 68 0 0 0 0 136h96a68 68 0 0 0 0-136Zm0 128H80a60 60 0 0 1 0-120h96a60 60 0 0 1 0 120Zm0-96a36 36 0 1 0 36 36 36 36 0 0 0-36-36Zm0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28Z" />
  </Svg>
);
const Memo = memo(SvgToggleRightThin);
export default Memo;
