import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircleHalfTiltFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM40 128a88 88 0 0 1 150.2-62.2L65.8 190.2A87.76 87.76 0 0 1 40 128Z" />
  </Svg>
);
const Memo = memo(SvgCircleHalfTiltFill);
export default Memo;
