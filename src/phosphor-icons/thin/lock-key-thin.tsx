import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockKeyThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12ZM92 56a36 36 0 0 1 72 0v28H92Zm120 152a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-84-92a24 24 0 0 0-4 47.66V184a4 4 0 0 0 8 0v-20.34a24 24 0 0 0-4-47.66Zm0 40a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" />
  </Svg>
);
const Memo = memo(SvgLockKeyThin);
export default Memo;
