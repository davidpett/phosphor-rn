import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareSplitHorizontalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12ZM52 200V56a4 4 0 0 1 4-4h68v152H56a4 4 0 0 1-4-4Zm152 0a4 4 0 0 1-4 4h-68V52h68a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgSquareSplitHorizontalThin);
export default Memo;
