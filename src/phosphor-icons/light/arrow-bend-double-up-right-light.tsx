import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDoubleUpRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 108.24-48 48a6 6 0 0 1-8.48-8.48L215.51 104l-43.75-43.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48Zm-48-8.48-48-48a6 6 0 1 0-8.48 8.48L161.51 98H128A102.12 102.12 0 0 0 26 200a6 6 0 0 0 12 0 90.1 90.1 0 0 1 90-90h33.51l-37.75 37.76a6 6 0 1 0 8.48 8.48l48-48a6 6 0 0 0 0-8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDoubleUpRightLight);
export default Memo;
