import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGasCanLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 26h-76.69a13.94 13.94 0 0 0-9.9 4.1l-11.75 11.76L89.9 30.1a14 14 0 0 0-19.8 0l-24 24a14 14 0 0 0 0 19.8l11.76 11.76L46.1 97.41a13.94 13.94 0 0 0-4.1 9.9V216a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V40a14 14 0 0 0-14-14ZM54.59 65.41a2 2 0 0 1 0-2.82l24-24a2 2 0 0 1 2.82 0l11.76 11.75-26.83 26.83ZM202 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V107.31a2 2 0 0 1 .59-1.41l16-16 35.31-35.31 16-16a2 2 0 0 1 1.41-.59H200a2 2 0 0 1 2 2ZM182 64a6 6 0 0 1-6 6h-40a6 6 0 0 1 0-12h40a6 6 0 0 1 6 6Zm-2.4 60.8L138 156l41.6 31.2a6 6 0 1 1-7.2 9.6L128 163.5l-44.4 33.3a6 6 0 0 1-7.2-9.6L118 156l-41.6-31.2a6 6 0 0 1 7.2-9.6l44.4 33.3 44.4-33.3a6 6 0 1 1 7.2 9.6Z" />
  </Svg>
);
const Memo = memo(SvgGasCanLight);
export default Memo;
