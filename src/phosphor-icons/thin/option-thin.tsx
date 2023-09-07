import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOptionThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 184a4 4 0 0 1-4 4h-63.06a11.94 11.94 0 0 1-10.73-6.63L98.63 78.21A4 4 0 0 0 95.06 76H32a4 4 0 0 1 0-8h63.06a11.94 11.94 0 0 1 10.73 6.63l51.58 103.16a4 4 0 0 0 3.57 2.21H224a4 4 0 0 1 4 4ZM152 76h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8Z" />
  </Svg>
);
const Memo = memo(SvgOptionThin);
export default Memo;
