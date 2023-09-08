import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPinwheelFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m229.66 218.34-48.42-48.41c1.1-.33 2.19-.68 3.27-1.07A60 60 0 0 0 220.37 92a8 8 0 0 0-10.25-4.78l-44.2 16.08c.32-.62.64-1.24.93-1.88A60 60 0 0 0 92 19.65a8 8 0 0 0-4.82 10.25l16.09 44.22c-.63-.32-1.25-.65-1.89-1a60 60 0 0 0-81.73 74.89 8 8 0 0 0 10.25 4.78l44.2-16.09c-.32.63-.64 1.25-.93 1.89a60 60 0 0 0 74.89 81.73 8 8 0 0 0 4.78-10.25l-16.08-44.18c.62.31 1.24.62 1.88.91a59.87 59.87 0 0 0 22.48 5.58l57.22 57.23a8 8 0 0 0 11.32-11.32ZM109 203.87a44 44 0 0 1-3.73-77.81l29.6 81.33a43.6 43.6 0 0 1-25.87-3.52Zm43.4-109.25A43.77 43.77 0 0 1 134.8 114l-29.61-81.37a44 44 0 0 1 47.16 62Z" />
  </Svg>
);
const Memo = memo(SvgPinwheelFill);
export default Memo;
