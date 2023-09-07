import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneTilt = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m185.33 114.21 29.14-27.42.17-.17a32 32 0 0 0-45.26-45.26c0 .06-.11.11-.17.17l-27.42 29.14-83-30.2a8 8 0 0 0-8.39 1.86l-24 24a8 8 0 0 0 1.22 12.31l63.89 42.59L76.69 136H56a8 8 0 0 0-5.65 2.34l-24 24A8 8 0 0 0 29 175.42l36.82 14.73 14.7 36.75.06.16a8 8 0 0 0 13.18 2.47l23.87-23.88A8 8 0 0 0 120 200v-20.69l14.76-14.76 42.59 63.89a8 8 0 0 0 12.31 1.22l24-24a8 8 0 0 0 1.86-8.39Zm-.07 97.23-42.59-63.88a8 8 0 0 0-5.87-3.56h-.79a8 8 0 0 0-5.66 2.35l-24 24A8 8 0 0 0 104 176v20.69l-13.07 13.07L79.43 181a8 8 0 0 0-4.43-4.43l-28.74-11.5L59.32 152H80a8 8 0 0 0 5.66-2.34l24-24a8 8 0 0 0-1.22-12.32l-63.88-42.6 13.5-13.49 83.22 30.26a8 8 0 0 0 8.56-2l30.94-32.91a16 16 0 0 1 22.62 22.63l-32.87 30.93a8 8 0 0 0-2 8.56l30.26 83.22Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneTilt);
export default Memo;
