import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextUnderlineFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16ZM80 72a8 8 0 0 1 16 0v48a32 32 0 0 0 64 0V72a8 8 0 0 1 16 0v48a48 48 0 0 1-96 0Zm96 128H80a8 8 0 0 1 0-16h96a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgTextUnderlineFill);
export default Memo;
