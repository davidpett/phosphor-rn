import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPantsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m219.91 214.51-22-176A12 12 0 0 0 186 28H70a12 12 0 0 0-11.91 10.51l-22 176A12 12 0 0 0 48 228h40.69a12 12 0 0 0 11.64-9.06L128 112l27.67 106.94a12 12 0 0 0 11.64 9.06H208a12 12 0 0 0 11.91-13.49ZM197.52 99.9A36 36 0 0 1 164.23 68h29.3ZM70 36h116a4 4 0 0 1 4 3.5l2.53 20.5H63.47L66 39.5a4 4 0 0 1 4-3.5Zm-7.53 32h29.3a36 36 0 0 1-33.29 31.9Zm30.1 149a4 4 0 0 1-3.88 3H48a4 4 0 0 1-4-4.5L57.47 108a44.05 44.05 0 0 0 42.34-40H124v27.49ZM211 218.65a4 4 0 0 1-3 1.35h-40.69a4 4 0 0 1-3.89-3.06L132 95.49V68h24.19a44.05 44.05 0 0 0 42.34 40L212 215.5a4 4 0 0 1-1 3.15Z" />
  </Svg>
);
const Memo = memo(SvgPantsThin);
export default Memo;
