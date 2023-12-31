import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyBtcDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M192 160a40 40 0 0 1-40 40H80V48h60a36 36 0 0 1 0 72h12a40 40 0 0 1 40 40Z"
      opacity={0.2}
    />
    <Path d="M170.48 115.7A44 44 0 0 0 144 40.19V24a8 8 0 0 0-16 0v16h-16V24a8 8 0 0 0-16 0v16H64a8 8 0 0 0 0 16h8v136h-8a8 8 0 0 0 0 16h32v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h8a48 48 0 0 0 18.48-92.3ZM88 56h52a28 28 0 0 1 0 56H88Zm64 136H88v-64h64a32 32 0 0 1 0 64Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyBtcDuotone);
export default Memo;
