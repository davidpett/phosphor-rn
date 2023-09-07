import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatTeardropBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 20A104.11 104.11 0 0 0 28 124v84.33A19.69 19.69 0 0 0 47.67 228H132a104 104 0 0 0 0-208Zm0 184H52v-80a80 80 0 1 1 80 80Z" />
  </Svg>
);
const Memo = memo(SvgChatTeardropBold);
export default Memo;
