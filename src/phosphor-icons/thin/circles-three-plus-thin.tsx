import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCirclesThreePlusThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M80 44a36 36 0 1 0 36 36 36 36 0 0 0-36-36Zm0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm96 8a36 36 0 1 0-36-36 36 36 0 0 0 36 36Zm0-64a28 28 0 1 1-28 28 28 28 0 0 1 28-28Zm-96 88a36 36 0 1 0 36 36 36 36 0 0 0-36-36Zm0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm132-28a4 4 0 0 1-4 4h-28v28a4 4 0 0 1-8 0v-28h-28a4 4 0 0 1 0-8h28v-28a4 4 0 0 1 8 0v28h28a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgCirclesThreePlusThin);
export default Memo;
