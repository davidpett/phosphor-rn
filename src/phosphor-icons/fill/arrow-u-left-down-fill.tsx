import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowULeftDownFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 88v88a8 8 0 0 1-16 0V88a48 48 0 0 0-96 0v80h40a8 8 0 0 1 5.66 13.66l-48 48a8 8 0 0 1-11.32 0l-48-48A8 8 0 0 1 40 168h40V88a64 64 0 0 1 128 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowULeftDownFill);
export default Memo;
