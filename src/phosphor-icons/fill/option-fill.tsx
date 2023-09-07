import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOptionFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-16 136h-47.06a15.92 15.92 0 0 1-14.31-8.84L103.06 96H56a8 8 0 0 1 0-16h47.06a15.92 15.92 0 0 1 14.31 8.84L152.94 160H200a8 8 0 0 1 0 16Zm0-80h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgOptionFill);
export default Memo;
