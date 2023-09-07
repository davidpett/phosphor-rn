import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextAaFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 156c0 6.5-7.33 12-16 12s-16-5.5-16-12 7.33-12 16-12 16 5.5 16 12ZM73.61 136h36.78L92 92.53ZM232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-88.63 116.88-44-104a8 8 0 0 0-14.74 0l-44 104a8 8 0 0 0 14.74 6.24L66.84 152h50.32l11.47 27.12a8 8 0 0 0 14.74-6.24ZM216 132c0-15.44-14.36-28-32-28a34.86 34.86 0 0 0-20.78 6.68 8 8 0 0 0 9.56 12.83A18.84 18.84 0 0 1 184 120c8.56 0 15.8 5.36 16 11.76a35.24 35.24 0 0 0-16-3.76c-17.64 0-32 12.56-32 28s14.36 28 32 28a35.13 35.13 0 0 0 16.93-4.26A8 8 0 0 0 216 176Z" />
  </Svg>
);
const Memo = memo(SvgTextAaFill);
export default Memo;
