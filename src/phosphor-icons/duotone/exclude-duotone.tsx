import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExcludeDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M88 160a73.37 73.37 0 0 0 .4 7.6 72 72 0 1 1 79.2-79.2 73.37 73.37 0 0 0-7.6-.4 72 72 0 0 0-72 72Zm79.6-71.6a73.37 73.37 0 0 1 .4 7.6 72 72 0 0 1-72 72 73.37 73.37 0 0 1-7.6-.4 72 72 0 1 0 79.2-79.2Z"
      opacity={0.2}
    />
    <Path d="M174.63 81.37a80 80 0 1 0-93.26 93.26 80 80 0 1 0 93.26-93.26ZM32 96a64 64 0 0 1 126-16 80.08 80.08 0 0 0-77.95 78A64.11 64.11 0 0 1 32 96Zm128 0a64.07 64.07 0 0 1-64 64 64.07 64.07 0 0 1 64-64Zm0 128a64.11 64.11 0 0 1-62-48 80.08 80.08 0 0 0 78-78 64 64 0 0 1-16 126Z" />
  </Svg>
);
const Memo = memo(SvgExcludeDuotone);
export default Memo;
