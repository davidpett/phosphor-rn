import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareEightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M112 100a16 16 0 1 1 16 16 16 16 0 0 1-16-16Zm16 32a20 20 0 1 0 20 20 20 20 0 0 0-20-20Zm96-84v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-60 104a35.93 35.93 0 0 0-14.19-28.61 32 32 0 1 0-43.62 0A36 36 0 1 0 164 152Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareEightFill);
export default Memo;
