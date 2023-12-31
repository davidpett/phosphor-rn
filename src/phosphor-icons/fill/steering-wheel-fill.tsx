import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSteeringWheelFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM49.63 168h40.82l17 45.58A88.35 88.35 0 0 1 49.63 168ZM128 156a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm20.46 57.59L165.55 168h40.82a88.34 88.34 0 0 1-57.91 45.59ZM128 96a136.38 136.38 0 0 0-88 32.33V128a88 88 0 0 1 176 0v.33A136.38 136.38 0 0 0 128 96Z" />
  </Svg>
);
const Memo = memo(SvgSteeringWheelFill);
export default Memo;
