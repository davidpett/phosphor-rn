import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebcamFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 104a32 32 0 1 1-32-32 32 32 0 0 1 32 32Zm72 104a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h88v-16.4a80 80 0 1 1 16 0V200h88a8 8 0 0 1 8 8Zm-104-56a48 48 0 1 0-48-48 48.05 48.05 0 0 0 48 48Z" />
  </Svg>
);
const Memo = memo(SvgWebcamFill);
export default Memo;
