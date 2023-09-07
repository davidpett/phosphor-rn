import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendUpLeftFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 200a8 8 0 0 1-16 0 88.1 88.1 0 0 0-88-88H88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 88 56v40h40a104.11 104.11 0 0 1 104 104Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendUpLeftFill);
export default Memo;
