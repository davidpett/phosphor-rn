import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendRightUpBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208.49 88.49a12 12 0 0 1-17 0L164 61v67A108.12 108.12 0 0 1 56 236a12 12 0 0 1 0-24 84.09 84.09 0 0 0 84-84V61l-27.51 27.49a12 12 0 0 1-17-17l48-48a12 12 0 0 1 17 0l48 48a12 12 0 0 1 0 17Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendRightUpBold);
export default Memo;
