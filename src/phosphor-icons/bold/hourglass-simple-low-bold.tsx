import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHourglassSimpleLowBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M214 193.68 145.35 128 214 62.32l.18-.18A20 20 0 0 0 200 28H56a20 20 0 0 0-14.13 34.14l.18.18 68.6 65.68-68.6 65.68-.18.18A20 20 0 0 0 56 228h144a20 20 0 0 0 14.14-34.14ZM148.25 164h-40.5L128 144.61ZM190 52l-62 59.39L66 52ZM66 204l16.71-16h90.62L190 204Z" />
  </Svg>
);
const Memo = memo(SvgHourglassSimpleLowBold);
export default Memo;
