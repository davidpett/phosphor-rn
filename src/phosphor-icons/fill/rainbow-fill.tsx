import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRainbowFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 48A120.13 120.13 0 0 0 8 168v16a8 8 0 0 0 8 8h224a8 8 0 0 0 8-8v-16A120.13 120.13 0 0 0 128 48Zm32 128a8 8 0 0 1-8-8 24 24 0 0 0-48 0 8 8 0 0 1-16 0 40 40 0 0 1 80 0 8 8 0 0 1-8 8Zm32 0a8 8 0 0 1-8-8 56 56 0 0 0-112 0 8 8 0 0 1-16 0 72 72 0 0 1 144 0 8 8 0 0 1-8 8Zm32 0a8 8 0 0 1-8-8 88 88 0 0 0-176 0 8 8 0 0 1-16 0 104 104 0 0 1 208 0 8 8 0 0 1-8 8Z" />
  </Svg>
);
const Memo = memo(SvgRainbowFill);
export default Memo;
