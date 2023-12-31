import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBarcodeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 48v40a4 4 0 0 1-8 0V52h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4ZM72 204H36v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8Zm152-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4ZM32 92a4 4 0 0 0 4-4V52h36a4 4 0 0 0 0-8H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4Zm48-8a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4Zm100 4a4 4 0 0 0-8 0v80a4 4 0 0 0 8 0Zm-36-4a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4Zm-32 0a4 4 0 0 0-4 4v80a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4Z" />
  </Svg>
);
const Memo = memo(SvgBarcodeThin);
export default Memo;
