import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDoubleUpRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m232.49 112.49-48 48a12 12 0 0 1-17-17L207 104l-39.49-39.52a12 12 0 0 1 17-17l48 48a12 12 0 0 1-.02 17.01Zm-56-17-48-48a12 12 0 1 0-17 17L139 92h-11A108.12 108.12 0 0 0 20 200a12 12 0 0 0 24 0 84.09 84.09 0 0 1 84-84h11l-27.52 27.51a12 12 0 0 0 17 17l48-48a12 12 0 0 0 .01-17Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDoubleUpRightBold);
export default Memo;
