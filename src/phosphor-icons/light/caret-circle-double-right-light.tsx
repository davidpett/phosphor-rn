import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleDoubleRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200.12 55.87A102 102 0 0 0 55.87 200.12 102 102 0 1 0 200.12 55.87Zm-8.48 135.77a90 90 0 1 1 0-127.28 90.1 90.1 0 0 1 0 127.28Zm-67.4-67.88a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L111.51 128l-27.75-27.76a6 6 0 0 1 8.48-8.48Zm56 0a6 6 0 0 1 0 8.48l-32 32a6 6 0 0 1-8.48-8.48L167.51 128l-27.75-27.76a6 6 0 0 1 8.48-8.48Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleDoubleRightLight);
export default Memo;
