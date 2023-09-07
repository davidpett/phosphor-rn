import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowLeftUpBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M236 192a12 12 0 0 1-12 12H80a12 12 0 0 1-12-12V77l-27.51 27.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1-17 17L92 77v103h132a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowLeftUpBold);
export default Memo;
