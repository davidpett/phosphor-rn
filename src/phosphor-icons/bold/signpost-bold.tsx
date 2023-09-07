import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignpostBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m248.92 104-36-40a12 12 0 0 0-8.92-4h-64V32a12 12 0 0 0-24 0v28H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h76v60a12 12 0 0 0 24 0v-60h64a12 12 0 0 0 8.92-4l36-40a12 12 0 0 0 0-16Zm-50.26 36H44V84h154.66l25.2 28Z" />
  </Svg>
);
const Memo = memo(SvgSignpostBold);
export default Memo;
