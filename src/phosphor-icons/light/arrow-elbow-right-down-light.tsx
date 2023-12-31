import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowRightDownLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 164.24-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 1 1 8.48-8.48L170 193.51V70H32a6 6 0 0 1 0-12h144a6 6 0 0 1 6 6v129.51l37.76-37.75a6 6 0 0 1 8.48 8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowRightDownLight);
export default Memo;
