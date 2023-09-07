import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPauseCircle = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88ZM112 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgPauseCircle);
export default Memo;
