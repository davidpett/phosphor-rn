import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesThreeDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 112a36 36 0 1 1 36-36 36 36 0 0 1-36 36Zm60 24a36 36 0 1 0 36 36 36 36 0 0 0-36-36Zm-120 0a36 36 0 1 0 36 36 36 36 0 0 0-36-36Z"
      opacity={0.2}
    />
    <Path d="M172 76a44 44 0 1 0-44 44 44.05 44.05 0 0 0 44-44Zm-44 28a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm60 24a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28 28 28 0 0 1-28 28ZM68 128a44 44 0 1 0 44 44 44.05 44.05 0 0 0-44-44Zm0 72a28 28 0 1 1 28-28 28 28 0 0 1-28 28Z" />
  </Svg>
);
const Memo = memo(SvgCirclesThreeDuotone);
export default Memo;
