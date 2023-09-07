import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184.49 119.51a12 12 0 0 1 0 17l-72 72a12 12 0 0 1-17-17L147 140H32a12 12 0 0 1 0-24h115L95.51 64.49a12 12 0 0 1 17-17ZM216 28a12 12 0 0 0-12 12v176a12 12 0 0 0 24 0V40a12 12 0 0 0-12-12Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineRightBold);
export default Memo;
