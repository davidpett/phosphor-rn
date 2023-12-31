import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLineSegmentBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M217.47 38.53a36 36 0 0 0-57.95 41l-80 80a36.07 36.07 0 0 0-41 7 36 36 0 1 0 58 9.95l80-80a36 36 0 0 0 41-57.95Zm-145 162a12 12 0 1 1 0-17 12 12 0 0 1 .01 16.97Zm128-128a12 12 0 0 1-17 0 12 12 0 1 1 17 0Z" />
  </Svg>
);
const Memo = memo(SvgLineSegmentBold);
export default Memo;
