import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClipboardTextDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 48v168a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h40a39.83 39.83 0 0 0-8 24v8h80v-8a39.83 39.83 0 0 0-8-24h40a8 8 0 0 1 8 8Z"
      opacity={0.2}
    />
    <Path d="M168 152a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-8-40H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Zm56-64v168a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h36.26a47.92 47.92 0 0 1 71.48 0H200a16 16 0 0 1 16 16ZM96 64h64a32 32 0 0 0-64 0Zm104-16h-26.75A47.93 47.93 0 0 1 176 64v8a8 8 0 0 1-8 8H88a8 8 0 0 1-8-8v-8a47.93 47.93 0 0 1 2.75-16H56v168h144Z" />
  </Svg>
);
const Memo = memo(SvgClipboardTextDuotone);
export default Memo;
