import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSkipForwardCircleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm32-136a4 4 0 0 0-4 4v32.78L98.12 84.61A4 4 0 0 0 92 88v80a4 4 0 0 0 2.06 3.5 4.06 4.06 0 0 0 1.94.5 4 4 0 0 0 2.12-.61L156 135.22V168a4 4 0 0 0 8 0V88a4 4 0 0 0-4-4Zm-60 76.78V95.22L152.45 128Z" />
  </Svg>
);
const Memo = memo(SvgSkipForwardCircleThin);
export default Memo;