import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStethoscopeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 152a32 32 0 1 0-39.93 31 8 8 0 0 0-.07 1 32 32 0 0 1-32 32h-24a32 32 0 0 1-32-32v-40.52c31.47-4 56-31.47 56-64.31V40a16 16 0 0 0-16-16h-16a8 8 0 0 0 0 16h16v39.17c0 26.58-21.25 48.49-47.36 48.83A48 48 0 0 1 48 80V40h16a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v40a64 64 0 0 0 56 63.49V184a48.05 48.05 0 0 0 48 48h24a48.05 48.05 0 0 0 48-48 8 8 0 0 0-.07-1A32 32 0 0 0 232 152Zm-32 8a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" />
  </Svg>
);
const Memo = memo(SvgStethoscopeFill);
export default Memo;
