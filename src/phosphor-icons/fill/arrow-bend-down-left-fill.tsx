import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDownLeftFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 56a104.11 104.11 0 0 1-104 104H88v40a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 88 104v40h40a88.1 88.1 0 0 0 88-88 8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDownLeftFill);
export default Memo;
