import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLineSegmentsLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M237.23 34.77a30.06 30.06 0 0 0-42.44 0 30.06 30.06 0 0 0 0 42.44c.65.64 1.32 1.24 2 1.81l-28.14 52.26a30.11 30.11 0 0 0-25.19 3.72L121 112.54a30 30 0 0 0-46.22-37.76 30 30 0 0 0 0 42.43 26.28 26.28 0 0 0 2 1.82l-28.14 52.26a30 30 0 0 0-29.87 7.5 30 30 0 1 0 42.44 0c-.65-.64-1.32-1.24-2-1.81l28.14-52.26a30.07 30.07 0 0 0 25.19-3.72L135 143.46a30 30 0 1 0 46.25-4.67 26.28 26.28 0 0 0-2-1.82l28.14-52.26a30 30 0 0 0 29.87-49.94Zm-184.51 178a18 18 0 1 1 0-25.46 18 18 0 0 1 0 25.43Zm30.55-104a18 18 0 1 1 25.46 0 18 18 0 0 1-25.46-.04Zm89.46 64a18 18 0 1 1 0-25.46 18 18 0 0 1 0 25.42Zm56-104a18 18 0 1 1 0-25.46 18 18 0 0 1 .01 25.41Z" />
  </Svg>
);
const Memo = memo(SvgLineSegmentsLight);
export default Memo;
