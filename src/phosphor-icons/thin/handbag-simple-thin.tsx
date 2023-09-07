import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandbagSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.92 198.59-14.26-120a12 12 0 0 0-12-10.59H172v-4a44 44 0 0 0-88 0v4H46.33a12 12 0 0 0-12 10.59l-14.26 120a12 12 0 0 0 2.93 9.35 12.11 12.11 0 0 0 9.08 4.06h191.84a12.11 12.11 0 0 0 9.06-4.06 12 12 0 0 0 2.94-9.35ZM92 64a36 36 0 0 1 72 0v4H92Zm135 138.63a4.08 4.08 0 0 1-3.08 1.37H32.08a4.08 4.08 0 0 1-3.08-1.37 3.9 3.9 0 0 1-1-3.09l14.25-120a4 4 0 0 1 4-3.54h163.42a4 4 0 0 1 4.05 3.54l14.25 120a3.9 3.9 0 0 1-.97 3.09Z" />
  </Svg>
);
const Memo = memo(SvgHandbagSimpleThin);
export default Memo;
