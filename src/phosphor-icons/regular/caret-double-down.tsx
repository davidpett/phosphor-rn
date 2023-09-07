import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretDoubleDown = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.66 122.34a8 8 0 0 1 0 11.32l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 196.69l74.34-74.35a8 8 0 0 1 11.32 0Zm-91.32 11.32a8 8 0 0 0 11.32 0l80-80a8 8 0 0 0-11.32-11.32L128 116.69 53.66 42.34a8 8 0 0 0-11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgCaretDoubleDown);
export default Memo;
