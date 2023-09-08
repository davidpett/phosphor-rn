import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtract = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M174.63 81.35a80 80 0 1 0-93.28 93.28 80 80 0 1 0 93.28-93.28ZM224 160c0 1.52-.07 3-.18 4.51l-50-50A80.14 80.14 0 0 0 176 98a63.81 63.81 0 0 1 48 62Zm-77.4-2.09 52.61 52.62A64 64 0 0 1 183 219.7l-51.86-51.86a80.5 80.5 0 0 0 15.46-9.93Zm11.31-11.31a80.5 80.5 0 0 0 9.93-15.44L219.7 183a64 64 0 0 1-9.17 16.19ZM32 96a64 64 0 1 1 64 64 64.07 64.07 0 0 1-64-64Zm66 80a80.14 80.14 0 0 0 16.5-2.13l50 50c-1.49.11-3 .18-4.51.18A63.81 63.81 0 0 1 98 176Z" />
  </Svg>
);
const Memo = memo(SvgSubtract);
export default Memo;
