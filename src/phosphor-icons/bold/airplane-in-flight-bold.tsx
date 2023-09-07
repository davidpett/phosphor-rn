import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAirplaneInFlightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 216a12 12 0 0 1-12 12H72a12 12 0 0 1 0-24h144a12 12 0 0 1 12 12Zm24-80v24a12 12 0 0 1-12 12H61.07a43.72 43.72 0 0 1-42.14-31.36L4.86 93.75A20 20 0 0 1 24 68h8a12 12 0 0 1 8.48 3.51L61 92h15.27L69 70.32A20 20 0 0 1 88 44h8a12 12 0 0 1 8.48 3.51L149 92h59a44.05 44.05 0 0 1 44 44Zm-24 0a20 20 0 0 0-20-20h-64a12 12 0 0 1-8.48-3.51l-40.69-40.7 9.47 28.42A12 12 0 0 1 92.91 116H56a12 12 0 0 1-8.49-3.51L30.4 95.36l11.51 38.39A19.89 19.89 0 0 0 61.07 148H228Z" />
  </Svg>
);
const Memo = memo(SvgAirplaneInFlightBold);
export default Memo;
