import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleRight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm29.66-93.66a8 8 0 0 1 0 11.32l-40 40a8 8 0 0 1-11.32-11.32L140.69 128l-34.35-34.34a8 8 0 0 1 11.32-11.32Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleRight);
export default Memo;
