import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTerminalWindow = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 128a8 8 0 0 1-3 6.25l-40 32a8 8 0 1 1-10-12.5L107.19 128 75 102.25a8 8 0 1 1 10-12.5l40 32a8 8 0 0 1 3 6.25Zm48 24h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Zm56-96v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-16 144V56H40v144h176Z" />
  </Svg>
);
const Memo = memo(SvgTerminalWindow);
export default Memo;
