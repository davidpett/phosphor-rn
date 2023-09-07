import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShareNetworkDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M208 200a32 32 0 1 1-32-32 32 32 0 0 1 32 32ZM176 88a32 32 0 1 0-32-32 32 32 0 0 0 32 32Z"
      opacity={0.2}
    />
    <Path d="M176 160a39.89 39.89 0 0 0-28.62 12.09l-46.1-29.63a39.8 39.8 0 0 0 0-28.92l46.1-29.63a40 40 0 1 0-8.66-13.45l-46.1 29.63a40 40 0 1 0 0 55.82l46.1 29.63A40 40 0 1 0 176 160Zm0-128a24 24 0 1 1-24 24 24 24 0 0 1 24-24ZM64 152a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm112 72a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" />
  </Svg>
);
const Memo = memo(SvgShareNetworkDuotone);
export default Memo;
