import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircleNotchFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 176A72 72 0 0 1 92 65.64a8 8 0 0 1 8 13.85 56 56 0 1 0 56 0 8 8 0 0 1 8-13.85A72 72 0 0 1 128 200Z" />
  </Svg>
);
const Memo = memo(SvgCircleNotchFill);
export default Memo;
