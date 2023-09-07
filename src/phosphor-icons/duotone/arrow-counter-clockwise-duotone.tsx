import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowCounterClockwiseDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M72 104H24V56Z" opacity={0.2} />
    <Path d="M195.88 60.08A96.08 96.08 0 0 0 60.25 60L49.31 70 29.66 50.3A8 8 0 0 0 16 56v48a8 8 0 0 0 8 8h48a8 8 0 0 0 5.66-13.66l-17-17 10.54-9.65a3.07 3.07 0 0 0 .26-.25 80 80 0 1 1 1.65 114.78 8 8 0 0 0-11 11.63A95.38 95.38 0 0 0 128 224h1.32a96 96 0 0 0 66.56-163.92ZM32 96V75.28L52.69 96Z" />
  </Svg>
);
const Memo = memo(SvgArrowCounterClockwiseDuotone);
export default Memo;
