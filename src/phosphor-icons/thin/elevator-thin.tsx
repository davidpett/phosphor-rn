import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgElevatorThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm-28 72v104h-48V108Zm-56 104H76V108h48Zm88-4a4 4 0 0 1-4 4h-20V104a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v108H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM148 72a4 4 0 0 1-4 4h-32a4 4 0 0 1 0-8h32a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgElevatorThin);
export default Memo;
