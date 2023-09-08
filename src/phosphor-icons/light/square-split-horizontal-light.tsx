import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareSplitHorizontalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM54 200V56a2 2 0 0 1 2-2h66v148H56a2 2 0 0 1-2-2Zm148 0a2 2 0 0 1-2 2h-66V54h66a2 2 0 0 1 2 2Z" />
  </Svg>
);
const Memo = memo(SvgSquareSplitHorizontalLight);
export default Memo;
