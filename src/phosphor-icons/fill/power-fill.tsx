import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPowerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104 104 0 0 0 128 24Zm-8 40a8 8 0 0 1 16 0v64a8 8 0 0 1-16 0Zm8 144A80 80 0 0 1 83.55 61.48a8 8 0 1 1 8.9 13.29 64 64 0 1 0 71.1 0 8 8 0 1 1 8.9-13.29A80 80 0 0 1 128 208Z" />
  </Svg>
);
const Memo = memo(SvgPowerFill);
export default Memo;
