import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M47.51 112.49a12 12 0 0 1 17-17L116 147V32a12 12 0 0 1 24 0v115l51.51-51.52a12 12 0 0 1 17 17l-72 72a12 12 0 0 1-17 0ZM216 204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineDownBold);
export default Memo;
