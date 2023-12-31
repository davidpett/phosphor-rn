import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGraphThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 156a27.87 27.87 0 0 0-19.4 7.84l-28.28-22A27.78 27.78 0 0 0 156 128a28.09 28.09 0 0 0-.45-5l19.45-6.45a28.07 28.07 0 1 0-2.53-7.58L153 115.45A28 28 0 0 0 128 100a27.68 27.68 0 0 0-7.6 1.06l-9.5-21.37A28 28 0 1 0 96 84a27.68 27.68 0 0 0 7.6-1.06l9.5 21.37a27.95 27.95 0 0 0-8.46 39.1L74 170.61a28 28 0 1 0 5.32 6l30.6-27.2a27.92 27.92 0 0 0 37.44-1.23l28.28 22A28 28 0 1 0 200 156Zm0-72a20 20 0 1 1-20 20 20 20 0 0 1 20-20ZM76 56a20 20 0 1 1 20 20 20 20 0 0 1-20-20ZM56 212a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm72-64a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm72 56a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgGraphThin);
export default Memo;
