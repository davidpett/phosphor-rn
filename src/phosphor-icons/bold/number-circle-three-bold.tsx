import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleThreeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm36-60a40 40 0 0 1-68.57 28 12 12 0 1 1 17.14-16.79A16 16 0 1 0 124 136a12 12 0 0 1-9.83-18.88L129 96h-25a12 12 0 0 1 0-24h48a12 12 0 0 1 9.83 18.88l-18.34 26.2A40 40 0 0 1 164 152Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleThreeBold);
export default Memo;
