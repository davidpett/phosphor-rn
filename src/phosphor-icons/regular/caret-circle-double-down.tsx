import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleDoubleDown = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46Zm-11.31 135.77a88 88 0 1 1 0-124.46 88.11 88.11 0 0 1 0 124.46ZM165.66 82.34a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 108.69l26.34-26.35a8 8 0 0 1 11.32 0Zm0 56a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L128 164.69l26.34-26.35a8 8 0 0 1 11.32 0Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleDoubleDown);
export default Memo;
