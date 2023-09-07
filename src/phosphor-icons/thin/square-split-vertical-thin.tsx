import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareSplitVerticalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 44H56a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12ZM56 52h144a4 4 0 0 1 4 4v68H52V56a4 4 0 0 1 4-4Zm144 152H56a4 4 0 0 1-4-4v-68h152v68a4 4 0 0 1-4 4Z" />
  </Svg>
);
const Memo = memo(SvgSquareSplitVerticalThin);
export default Memo;
