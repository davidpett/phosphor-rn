import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGraduationCapFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 207.24a119 119 0 0 0 16-7.73V240a8 8 0 0 1-16 0Zm11.76-88.43-56-29.87a8 8 0 0 0-7.52 14.12L171 128l17-9.06Zm64-29.87-120-64a8 8 0 0 0-7.52 0l-120 64a8 8 0 0 0 0 14.12L32 117.87v48.42a15.91 15.91 0 0 0 4.06 10.65C49.16 191.53 78.51 216 128 216a130 130 0 0 0 48-8.76v-76.57l-5-2.67-43 22.93L43.83 106 25 96l103-54.93L231 96l-18.78 10h-.06L188 118.94a8 8 0 0 1 4 6.93v73.64a115.63 115.63 0 0 0 27.94-22.57 15.91 15.91 0 0 0 4.06-10.65v-48.42l27.76-14.81a8 8 0 0 0 0-14.12Z" />
  </Svg>
);
const Memo = memo(SvgGraduationCapFill);
export default Memo;
