import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTerminalWindowFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-91 94.25-40 32a8 8 0 1 1-10-12.5L107.19 128 75 102.25a8 8 0 1 1 10-12.5l40 32a8 8 0 0 1 0 12.5ZM176 168h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgTerminalWindowFill);
export default Memo;
