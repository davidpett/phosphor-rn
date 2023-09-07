import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTimerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 40a96 96 0 1 0 96 96 96.11 96.11 0 0 0-96-96Zm45.66 61.66-40 40a8 8 0 0 1-11.32-11.32l40-40a8 8 0 0 1 11.32 11.32ZM96 16a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16h-48a8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgTimerFill);
export default Memo;
