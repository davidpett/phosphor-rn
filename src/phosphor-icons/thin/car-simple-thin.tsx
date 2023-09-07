import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCarSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 116h-13.4l-28.83-64.87a12 12 0 0 0-11-7.13H69.2a12 12 0 0 0-11 7.13L29.4 116H16a4 4 0 0 0 0 8h12v84a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-20h104v20a12 12 0 0 0 12 12h24a12 12 0 0 0 12-12v-84h12a4 4 0 0 0 0-8ZM65.54 54.38A4 4 0 0 1 69.2 52h117.6a4 4 0 0 1 3.66 2.38L217.84 116H38.16ZM220 208a4 4 0 0 1-4 4h-24a4 4 0 0 1-4-4v-24a4 4 0 0 0-4-4H72a4 4 0 0 0-4 4v24a4 4 0 0 1-4 4H40a4 4 0 0 1-4-4v-84h184Z" />
  </Svg>
);
const Memo = memo(SvgCarSimpleThin);
export default Memo;
