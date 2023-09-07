import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareHalfBottomDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 128v72a8 8 0 0 1-8 8H56a8 8 0 0 1-8-8v-72Z" opacity={0.2} />
    <Path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm0 16v64H56V56Zm0 144H56v-64h144v64Z" />
  </Svg>
);
const Memo = memo(SvgSquareHalfBottomDuotone);
export default Memo;
