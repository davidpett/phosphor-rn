import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyGbpThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 208a4 4 0 0 1-4 4H56a4 4 0 0 1 0-8h4a32 32 0 0 0 32-32v-40H56a4 4 0 0 1 0-8h36V84a48 48 0 0 1 78.53-37 4 4 0 1 1-5.09 6.17A40 40 0 0 0 100 84v40h36a4 4 0 0 1 0 8h-36v40a40 40 0 0 1-16 32h100a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyGbpThin);
export default Memo;
