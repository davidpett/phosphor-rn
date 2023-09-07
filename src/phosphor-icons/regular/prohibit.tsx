import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgProhibit = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm88 104a87.56 87.56 0 0 1-20.41 56.28L71.72 60.4A88 88 0 0 1 216 128Zm-176 0a87.56 87.56 0 0 1 20.41-56.28L184.28 195.6A88 88 0 0 1 40 128Z" />
  </Svg>
);
const Memo = memo(SvgProhibit);
export default Memo;
