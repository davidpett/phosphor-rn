import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlarm = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 32a96 96 0 1 0 96 96 96.11 96.11 0 0 0-96-96Zm0 176a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80ZM61.66 29.66l-32 32a8 8 0 0 1-11.32-11.32l32-32a8 8 0 1 1 11.32 11.32Zm176 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32ZM184 120a8 8 0 0 1 0 16h-56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v48Z" />
  </Svg>
);
const Memo = memo(SvgAlarm);
export default Memo;
