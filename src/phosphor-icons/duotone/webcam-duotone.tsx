import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebcamDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M128 32a72 72 0 1 0 72 72 72 72 0 0 0-72-72Zm0 104a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z"
      opacity={0.2}
    />
    <Path d="M168 104a40 40 0 1 0-40 40 40 40 0 0 0 40-40Zm-64 0a24 24 0 1 1 24 24 24 24 0 0 1-24-24Zm120 96h-88v-16.4a80 80 0 1 0-16 0V200H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16ZM64 104a64 64 0 1 1 64 64 64.07 64.07 0 0 1-64-64Z" />
  </Svg>
);
const Memo = memo(SvgWebcamDuotone);
export default Memo;
