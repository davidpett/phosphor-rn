import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStackOverflowLogoLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M214 152.09V216a6 6 0 0 1-6 6H48a6 6 0 0 1-6-6v-63.91a6 6 0 0 1 12 0V210h148v-57.91a6 6 0 0 1 12 0Zm-126 30h80a6 6 0 1 0 0-12H88a6 6 0 1 0 0 12Zm5.4-52.93 77.27 20.67a6 6 0 1 0 3.11-11.57L96.5 117.54a6 6 0 1 0-3.1 11.58Zm18.93-49.74 69.28 40a6.05 6.05 0 0 0 3 .8 6 6 0 0 0 3-11.18L118.33 69a6 6 0 1 0-6 10.38Zm87.75 13.35a6 6 0 0 0 8.48-8.48L152 27.76a6 6 0 1 0-8.48 8.47Z" />
  </Svg>
);
const Memo = memo(SvgStackOverflowLogoLight);
export default Memo;
