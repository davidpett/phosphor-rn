import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleOneBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20Zm0 192a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm16-132v96a12 12 0 0 1-24 0v-73.58l-5.34 3.58a12 12 0 0 1-13.32-20l24-16A12 12 0 0 1 144 80Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleOneBold);
export default Memo;
