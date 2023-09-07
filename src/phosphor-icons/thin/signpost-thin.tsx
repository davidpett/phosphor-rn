import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSignpostThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m243 109.32-36-40a4 4 0 0 0-3-1.32h-72V32a4 4 0 0 0-8 0v36H40a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h84v68a4 4 0 0 0 8 0v-68h72a4 4 0 0 0 3-1.32l36-40a4 4 0 0 0 0-5.36ZM202.22 148H40a4 4 0 0 1-4-4V80a4 4 0 0 1 4-4h162.22l32.4 36Z" />
  </Svg>
);
const Memo = memo(SvgSignpostThin);
export default Memo;
