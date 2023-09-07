import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircleHalfDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 128a96 96 0 0 1-96 96V32a96 96 0 0 1 96 96Z" opacity={0.2} />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24ZM40 128a88.11 88.11 0 0 1 80-87.63v175.26A88.11 88.11 0 0 1 40 128Zm96 87.63V40.37a88 88 0 0 1 0 175.26Z" />
  </Svg>
);
const Memo = memo(SvgCircleHalfDuotone);
export default Memo;
