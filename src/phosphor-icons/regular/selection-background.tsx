import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSelectionBackground = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 80H48a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16Zm0 128H48V96h112ZM136 40a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-16a8 8 0 0 1-8-8Zm88 8v8a8 8 0 0 1-16 0v-8h-8a8 8 0 0 1 0-16h8a16 16 0 0 1 16 16Zm0 48v16a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0Zm0 56v8a16 16 0 0 1-16 16h-8a8 8 0 0 1 0-16h8v-8a8 8 0 0 1 16 0ZM80 56v-8a16 16 0 0 1 16-16h8a8 8 0 0 1 0 16h-8v8a8 8 0 0 1-16 0Z" />
  </Svg>
);
const Memo = memo(SvgSelectionBackground);
export default Memo;
