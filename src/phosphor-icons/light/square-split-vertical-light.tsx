import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareSplitVerticalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 42H56a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM56 54h144a2 2 0 0 1 2 2v66H54V56a2 2 0 0 1 2-2Zm144 148H56a2 2 0 0 1-2-2v-66h148v66a2 2 0 0 1-2 2Z" />
  </Svg>
);
const Memo = memo(SvgSquareSplitVerticalLight);
export default Memo;
