import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipForwardCircle = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm32-136a8 8 0 0 0-8 8v25.57l-51.76-32.35A8 8 0 0 0 88 88v80a8 8 0 0 0 12.24 6.78L152 142.43V168a8 8 0 0 0 16 0V88a8 8 0 0 0-8-8Zm-56 73.57v-51.14L144.91 128Z" />
  </Svg>
);
const Memo = memo(SvgSkipForwardCircle);
export default Memo;
