import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowArcLeft = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 184a8 8 0 0 1-16 0 88 88 0 0 0-150.22-62.22L43.4 144H88a8 8 0 0 1 0 16H24a8 8 0 0 1-8-8V88a8 8 0 0 1 16 0v44.77l22.48-22.33A104 104 0 0 1 232 184Z" />
  </Svg>
);
const Memo = memo(SvgArrowArcLeft);
export default Memo;
