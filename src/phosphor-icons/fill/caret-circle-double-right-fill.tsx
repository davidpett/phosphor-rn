import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleDoubleRightFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201.57 54.42a104 104 0 1 0 0 147.15 104.17 104.17 0 0 0 0-147.15Zm-75.91 79.24-32 32a8 8 0 1 1-11.32-11.32L108.68 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .02 11.34Zm56 0-32 32a8 8 0 0 1-11.32-11.32L164.71 128l-26.36-26.36a8 8 0 1 1 11.32-11.32l32 32a8 8 0 0 1 .01 11.34Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleDoubleRightFill);
export default Memo;
