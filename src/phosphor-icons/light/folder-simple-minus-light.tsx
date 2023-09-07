import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFolderSimpleMinusLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M158 144a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h48a6 6 0 0 1 6 6Zm72-56v112.89A13.12 13.12 0 0 1 216.89 214H40a14 14 0 0 1-14-14V64a14 14 0 0 1 14-14h53.33a14 14 0 0 1 8.4 2.8l27.74 20.8a2 2 0 0 0 1.2.4H216a14 14 0 0 1 14 14Zm-12 0a2 2 0 0 0-2-2h-85.33a14 14 0 0 1-8.4-2.8L94.53 62.4a2 2 0 0 0-1.2-.4H40a2 2 0 0 0-2 2v136a2 2 0 0 0 2 2h176.89a1.11 1.11 0 0 0 1.11-1.11Z" />
  </Svg>
);
const Memo = memo(SvgFolderSimpleMinusLight);
export default Memo;
