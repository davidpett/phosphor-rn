import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRecycleDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216 208H40a16 16 0 0 1-13.84-24l88-152a16 16 0 0 1 27.7 0l88 152A16 16 0 0 1 216 208Z"
      opacity={0.2}
    />
    <Path d="M96 208a8 8 0 0 1-8 8H40a24 24 0 0 1-20.77-36l34.29-59.25-14.05 3.75a8 8 0 1 1-4.14-15.5l32.77-8.77a8 8 0 0 1 9.8 5.66l8.79 32.77A8 8 0 0 1 81 148.5a8.37 8.37 0 0 1-2.08.27 8 8 0 0 1-7.72-5.93l-3.8-14.15L33.11 188A8 8 0 0 0 40 200h48a8 8 0 0 1 8 8Zm140.73-28-23.14-40a8 8 0 0 0-13.84 8l23.14 40a8 8 0 0 1-6.89 12h-68.69l10.34-10.34a8 8 0 0 0-11.31-11.32l-24 24a8 8 0 0 0 0 11.32l24 24a8 8 0 0 0 11.31-11.32L147.31 216H216a24 24 0 0 0 20.77-36ZM128 32a7.85 7.85 0 0 1 6.92 4l34.29 59.25-14.08-3.78a8 8 0 0 0-4.13 15.45l32.78 8.79a8.23 8.23 0 0 0 2.07.27 8 8 0 0 0 7.72-5.93l8.79-32.79a8 8 0 1 0-15.45-4.14l-3.8 14.17L148.77 28a24 24 0 0 0-41.54 0L84.07 68a8 8 0 0 0 13.85 8l23.16-40a7.85 7.85 0 0 1 6.92-4Z" />
  </Svg>
);
const Memo = memo(SvgRecycleDuotone);
export default Memo;
