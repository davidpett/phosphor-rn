import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleDoubleRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M195.88 195.88a96 96 0 1 1 0-135.76 96 96 0 0 1 0 135.76Z"
      opacity={0.2}
    />
    <Path d="M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46Zm-11.31 135.77a88 88 0 1 1 0-124.46 88.11 88.11 0 0 1 0 124.46Zm-64.57-67.89a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L108.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Zm56 0a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L164.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleDoubleRightDuotone);
export default Memo;
