import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockLaminatedBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 76h-28V56a52 52 0 0 0-104 0v20H48a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20ZM52 144h152v16H52Zm48-88a28 28 0 0 1 56 0v20h-56Zm104 44v20H52v-20ZM52 204v-20h152v20Z" />
  </Svg>
);
const Memo = memo(SvgLockLaminatedBold);
export default Memo;
