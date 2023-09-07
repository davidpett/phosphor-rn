import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLineSegmentFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M214.64 86.62a32.07 32.07 0 0 1-38.89 4.94l-84.19 84.19a32 32 0 1 1-50.2-6.37 32.06 32.06 0 0 1 38.89-4.94l84.19-84.19a32 32 0 1 1 50.2 6.37Z" />
  </Svg>
);
const Memo = memo(SvgLineSegmentFill);
export default Memo;
