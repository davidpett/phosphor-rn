import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatCircleDotsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M136 128a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-52-8a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm88 0a8 8 0 1 0 8 8 8 8 0 0 0-8-8Zm56 8a100 100 0 0 1-148.5 87.47l-35.69 11.9a12 12 0 0 1-15.18-15.18l11.9-35.69A100 100 0 1 1 228 128Zm-8 0a92 92 0 1 0-171.65 46.07 4 4 0 0 1 .33 3.27l-12.46 37.38a4 4 0 0 0 5.06 5.06l37.38-12.46a3.93 3.93 0 0 1 1.27-.21 4.05 4.05 0 0 1 2 .54A92 92 0 0 0 220 128Z" />
  </Svg>
);
const Memo = memo(SvgChatCircleDotsThin);
export default Memo;
