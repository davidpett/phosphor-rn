import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBugBeetleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 112h-16V96h16a8 8 0 0 1 0 16ZM32 96a8 8 0 0 0 0 16h16V96Zm176 56c0 2.7-.14 5.37-.4 8H224a8 8 0 0 1 0 16h-19.68a80 80 0 0 1-152.64 0H32a8 8 0 0 1 0-16h16.4c-.26-2.63-.4-5.3-.4-8v-8H32a8 8 0 0 1 0-16h16v-16h160v16h16a8 8 0 0 1 0 16h-16Zm-72-16a8 8 0 0 0-16 0v64a8 8 0 0 0 16 0ZM69.84 49.15A79.76 79.76 0 0 0 48.4 96h159.2a79.76 79.76 0 0 0-21.44-46.85l19.5-19.49a8 8 0 1 0-11.32-11.32l-20.29 20.3a79.74 79.74 0 0 0-92.1 0l-20.29-20.3a8 8 0 0 0-11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgBugBeetleFill);
export default Memo;
