import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFastForwardCircle = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm4.44-94.66-48-32A8 8 0 0 0 72 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32ZM88 145.05V111l25.58 17Zm108.44-23.71-48-32A8 8 0 0 0 136 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32ZM152 145.05V111l25.58 17Z" />
  </Svg>
);
const Memo = memo(SvgFastForwardCircle);
export default Memo;
