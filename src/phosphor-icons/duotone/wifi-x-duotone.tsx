import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiXDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="m224.39 104.34-90.24 108.78a8 8 0 0 1-12.3 0L17.8 87.69a7.79 7.79 0 0 1 1.31-11.21A179.58 179.58 0 0 1 128 40a181.82 181.82 0 0 1 33.06 3 7.94 7.94 0 0 1 4.17 2.21L224 104Z"
      opacity={0.2}
    />
    <Path d="M229.66 98.34a8 8 0 0 1-11.32 11.32L200 91.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L188.69 80l-18.35-18.34a8 8 0 0 1 11.32-11.32L200 68.69l18.34-18.35a8 8 0 0 1 11.32 11.32L211.31 80Zm-26.43 31.5a8 8 0 0 0-11.26 1L128 208 24.09 82.74A170.76 170.76 0 0 1 128 48c5.11 0 10.25.22 15.3.67a8 8 0 1 0 1.4-15.94c-5.51-.48-11.13-.73-16.7-.73A186.67 186.67 0 0 0 14.28 70.1a15.93 15.93 0 0 0-6.17 10.81 15.65 15.65 0 0 0 3.54 11.89l104 125.43A15.93 15.93 0 0 0 128 224a15.93 15.93 0 0 0 12.31-5.77l64-77.12a8 8 0 0 0-1.08-11.27Z" />
  </Svg>
);
const Memo = memo(SvgWifiXDuotone);
export default Memo;
