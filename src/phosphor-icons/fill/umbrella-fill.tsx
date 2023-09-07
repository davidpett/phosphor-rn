import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUmbrellaFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 126.63A112.21 112.21 0 0 0 128 24 112.21 112.21 0 0 0 16.05 126.63 16 16 0 0 0 32 144h88v56a32 32 0 0 0 64 0 8 8 0 0 0-16 0 16 16 0 0 1-32 0v-56h88a16 16 0 0 0 16-17.37ZM32 128a96.15 96.15 0 0 1 76.2-85.89C96.48 58 81.85 86.11 80.17 128H32Zm143.83 0c-1.68-41.89-16.31-70-28-85.94A96.07 96.07 0 0 1 224 128Z" />
  </Svg>
);
const Memo = memo(SvgUmbrellaFill);
export default Memo;
