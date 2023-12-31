import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgKeyboardBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M223.51 44h-191A20.51 20.51 0 0 0 12 64.49v127A20.51 20.51 0 0 0 32.49 212h191A20.51 20.51 0 0 0 244 191.51v-127A20.51 20.51 0 0 0 223.51 44ZM220 188H36V68h184ZM52 128a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12Zm0-36a12 12 0 0 1 12-12h128a12 12 0 0 1 0 24H64a12 12 0 0 1-12-12Zm0 72a12 12 0 0 1 12-12h8a12 12 0 0 1 0 24h-8a12 12 0 0 1-12-12Zm108 0a12 12 0 0 1-12 12h-40a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12Zm44 0a12 12 0 0 1-12 12h-8a12 12 0 0 1 0-24h8a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgKeyboardBold);
export default Memo;
