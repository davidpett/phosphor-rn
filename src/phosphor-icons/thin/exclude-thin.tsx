import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgExcludeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M171.17 84.83a76 76 0 1 0-86.34 86.34 76 76 0 1 0 86.34-86.34ZM228 160a68.63 68.63 0 0 1-1.27 13.07l-57.34-57.34A76 76 0 0 0 172 96c0-1 0-2-.07-2.93A68.1 68.1 0 0 1 228 160Zm-17.2 45.14-58.34-58.33a76.35 76.35 0 0 0 14.09-22.6L224.33 182a68.14 68.14 0 0 1-13.53 23.14ZM182 224.33l-57.78-57.78a76.35 76.35 0 0 0 22.6-14.09l58.33 58.34A68.14 68.14 0 0 1 182 224.33ZM45.2 50.86l58.34 58.33a76.35 76.35 0 0 0-14.09 22.6L31.67 74A68.14 68.14 0 0 1 45.2 50.86ZM74 31.67l57.78 57.78a76.35 76.35 0 0 0-22.6 14.09L50.86 45.2A68.14 68.14 0 0 1 74 31.67ZM92 160a68.07 68.07 0 0 1 68-68c1.3 0 2.6 0 3.88.12.12 1.28.12 2.58.12 3.88a68.07 68.07 0 0 1-68 68c-1.3 0-2.6-.05-3.88-.12-.07-1.28-.12-2.58-.12-3.88Zm70.93-75.93c-1 0-2-.07-2.93-.07a76 76 0 0 0-19.73 2.61L82.93 29.27a68 68 0 0 1 80 54.8ZM28 96a68.63 68.63 0 0 1 1.27-13.07l57.34 57.34A76 76 0 0 0 84 160c0 1 0 2 .07 2.93A68.1 68.1 0 0 1 28 96Zm65.07 75.93c1 0 2 .07 2.93.07a76 76 0 0 0 19.73-2.61l57.34 57.34a68 68 0 0 1-80-54.8Z" />
  </Svg>
);
const Memo = memo(SvgExcludeThin);
export default Memo;
