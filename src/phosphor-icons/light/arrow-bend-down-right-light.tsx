import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDownRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 156.24-48 48a6 6 0 0 1-8.48-8.48L209.51 158H128A102.12 102.12 0 0 1 26 56a6 6 0 0 1 12 0 90.1 90.1 0 0 0 90 90h81.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDownRightLight);
export default Memo;
