import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockLaminatedThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 84h-36V56a44 44 0 0 0-88 0v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12ZM44 124h168v24H44Zm0 32h168v24H44ZM92 56a36 36 0 0 1 72 0v28H92ZM48 92h160a4 4 0 0 1 4 4v20H44V96a4 4 0 0 1 4-4Zm160 120H48a4 4 0 0 1-4-4v-20h168v20a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgLockLaminatedThin);
export default Memo;
