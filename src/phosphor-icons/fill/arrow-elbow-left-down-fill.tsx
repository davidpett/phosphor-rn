import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowLeftDownFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 64a8 8 0 0 1-8 8H88v80h40a8 8 0 0 1 5.66 13.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 32 152h40V64a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowLeftDownFill);
export default Memo;
