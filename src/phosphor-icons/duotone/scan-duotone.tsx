import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScanDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M176 88v80a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M224 40v40a8 8 0 0 1-16 0V48h-32a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8ZM80 208H48v-32a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8h40a8 8 0 0 0 0-16Zm136-40a8 8 0 0 0-8 8v32h-32a8 8 0 0 0 0 16h40a8 8 0 0 0 8-8v-40a8 8 0 0 0-8-8ZM40 88a8 8 0 0 0 8-8V48h32a8 8 0 0 0 0-16H40a8 8 0 0 0-8 8v40a8 8 0 0 0 8 8Zm128 96H88a16 16 0 0 1-16-16V88a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16v80a16 16 0 0 1-16 16Zm-80-16h80V88H88Z" />
  </Svg>
);
const Memo = memo(SvgScanDuotone);
export default Memo;
