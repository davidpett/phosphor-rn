import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgElevatorFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-96 24h32a8 8 0 0 1 0 16h-32a8 8 0 0 1 0-16Zm8 152H64V96h56Zm72 0h-56V96h56Z" />
  </Svg>
);
const Memo = memo(SvgElevatorFill);
export default Memo;
