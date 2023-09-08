import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtractThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M171.17 84.82a76 76 0 1 0-86.35 86.35 76 76 0 1 0 86.35-86.35ZM228 160a68.63 68.63 0 0 1-1.27 13.07l-57.34-57.34A76 76 0 0 0 172 96c0-1 0-2-.07-2.94A67.79 67.79 0 0 1 228 160Zm-81.19-7.54 58.33 58.34A68.14 68.14 0 0 1 182 224.33l-57.78-57.78a76.35 76.35 0 0 0 22.59-14.09Zm5.65-5.65a76.35 76.35 0 0 0 14.09-22.6L224.33 182a68.14 68.14 0 0 1-13.53 23.15ZM28 96a68 68 0 1 1 68 68 68.07 68.07 0 0 1-68-68Zm65.06 75.93c1 0 2 .07 2.94.07a76 76 0 0 0 19.73-2.61l57.34 57.34A68.63 68.63 0 0 1 160 228a67.79 67.79 0 0 1-66.94-56.07Z" />
  </Svg>
);
const Memo = memo(SvgSubtractThin);
export default Memo;
