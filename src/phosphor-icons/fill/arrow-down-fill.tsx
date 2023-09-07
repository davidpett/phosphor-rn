import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowDownFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72A8 8 0 0 1 56 136h64V40a8 8 0 0 1 16 0v96h64a8 8 0 0 1 5.66 13.66Z" />
  </Svg>
);
const Memo = memo(SvgArrowDownFill);
export default Memo;
