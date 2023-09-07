import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInLineVerticalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M222 128a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6Zm-98.24-27.76a6 6 0 0 0 8.48 0l32-32a6 6 0 0 0-8.48-8.48L134 81.51V16a6 6 0 0 0-12 0v65.51l-21.76-21.75a6 6 0 0 0-8.48 8.48Zm8.48 55.52a6 6 0 0 0-8.48 0l-32 32a6 6 0 0 0 8.48 8.48L122 174.49V240a6 6 0 0 0 12 0v-65.51l21.76 21.75a6 6 0 0 0 8.48-8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInLineVerticalLight);
export default Memo;
