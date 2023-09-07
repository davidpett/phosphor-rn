import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBrushBroadLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 26H72a38 38 0 0 0-38 38v72a22 22 0 0 0 22 22h48a2 2 0 0 1 2 2.23L98.08 207a6.74 6.74 0 0 0-.08 1 30 30 0 0 0 60 0 6.74 6.74 0 0 0-.08-1L150 160.23a2 2 0 0 1 2-2.23h48a22 22 0 0 0 22-22V32a6 6 0 0 0-6-6ZM72 38h106v42a6 6 0 0 0 12 0V38h20v68H46V64a26 26 0 0 1 26-26Zm128 108h-48a14 14 0 0 0-13.86 16v.15l7.86 46.32a18 18 0 0 1-36 0l7.82-46.34v-.15A14 14 0 0 0 104 146H56a10 10 0 0 1-10-10v-18h164v18a10 10 0 0 1-10 10Z" />
  </Svg>
);
const Memo = memo(SvgPaintBrushBroadLight);
export default Memo;
