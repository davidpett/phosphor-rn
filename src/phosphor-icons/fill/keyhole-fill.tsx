import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKeyholeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm22.58-80 12.56 31.55A12 12 0 0 1 152 184h-48a12 12 0 0 1-11.14-16.44L105.42 136a36 36 0 1 1 45.16 0Z" />
  </Svg>
);
const Memo = memo(SvgKeyholeFill);
export default Memo;
