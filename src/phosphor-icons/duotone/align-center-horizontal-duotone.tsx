import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignCenterHorizontalDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M64 104V64a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v40a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8Zm144 40H48a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8Z"
      opacity={0.2}
    />
    <Path d="M208 136h-72v-16h48a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16h-48V32a8 8 0 0 0-16 0v16H72a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h48v16H48a16 16 0 0 0-16 16v40a16 16 0 0 0 16 16h72v16a8 8 0 0 0 16 0v-16h72a16 16 0 0 0 16-16v-40a16 16 0 0 0-16-16ZM72 64h112v40H72Zm136 128H48v-40h160v40Z" />
  </Svg>
);
const Memo = memo(SvgAlignCenterHorizontalDuotone);
export default Memo;
