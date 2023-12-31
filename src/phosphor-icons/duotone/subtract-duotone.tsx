import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtractDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M232 160a72 72 0 0 1-143.6 7.6 73.37 73.37 0 0 0 7.6.4 72 72 0 0 0 72-72 73.37 73.37 0 0 0-.4-7.6A72 72 0 0 1 232 160Z"
      opacity={0.2}
    />
    <Path d="M174.63 81.35a80 80 0 1 0-93.28 93.28 80 80 0 1 0 93.28-93.28ZM32 96a64 64 0 1 1 64 64 64.07 64.07 0 0 1-64-64Zm128 128a63.81 63.81 0 0 1-62-48 80.07 80.07 0 0 0 78-78 64 64 0 0 1-16 126Z" />
  </Svg>
);
const Memo = memo(SvgSubtractDuotone);
export default Memo;
