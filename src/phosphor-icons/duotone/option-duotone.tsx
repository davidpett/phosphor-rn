import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOptionDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 72v112H40a8 8 0 0 1-8-8V72Z" opacity={0.2} />
    <Path d="M232 184a8 8 0 0 1-8 8h-63.06a15.92 15.92 0 0 1-14.31-8.84L95.06 80H32a8 8 0 0 1 0-16h63.06a15.92 15.92 0 0 1 14.31 8.84L160.94 176H224a8 8 0 0 1 8 8ZM152 80h72a8 8 0 0 0 0-16h-72a8 8 0 0 0 0 16Z" />
  </Svg>
);
const Memo = memo(SvgOptionDuotone);
export default Memo;
