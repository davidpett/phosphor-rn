import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFileMagnifyingGlassLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m212.24 83.76-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24ZM158 46.48 193.52 82H158ZM200 218H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h90v50a6 6 0 0 0 6 6h50v122a2 2 0 0 1-2 2Zm-48.11-50.59a34.05 34.05 0 1 0-8.48 8.48l12.35 12.35a6 6 0 0 0 8.48-8.48ZM102 148a22 22 0 1 1 22 22 22 22 0 0 1-22-22Z" />
  </Svg>
);
const Memo = memo(SvgFileMagnifyingGlassLight);
export default Memo;
