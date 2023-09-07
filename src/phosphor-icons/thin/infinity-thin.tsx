import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgInfinityThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 128a52 52 0 0 1-88.77 36.77l-.17-.18L95 96.8a44 44 0 1 0 0 62.4l8.6-9.72a4 4 0 0 1 6 5.3l-8.68 9.81-.17.18a52 52 0 1 1 0-73.54l.17.18 60 67.79a44 44 0 1 0 0-62.4l-8.6 9.72a4 4 0 0 1-6-5.3l8.68-9.81.17-.18A52 52 0 0 1 244 128Z" />
  </Svg>
);
const Memo = memo(SvgInfinityThin);
export default Memo;
