import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDesktopBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 36H48a28 28 0 0 0-28 28v108a28 28 0 0 0 28 28h68v12H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-12h68a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28ZM48 60h160a4 4 0 0 1 4 4v72H44V64a4 4 0 0 1 4-4Zm160 116H48a4 4 0 0 1-4-4v-12h168v12a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgDesktopBold);
export default Memo;
