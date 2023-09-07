import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShootingStar = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M239.37 70.1A13.16 13.16 0 0 0 227.9 61l-37.22-3.15L176.16 24a13.24 13.24 0 0 0-24.31 0l-14.52 33.86L100.1 61a13.13 13.13 0 0 0-7.49 23.06l28.16 24-8.43 35.73a13.1 13.1 0 0 0 5 13.58 13.25 13.25 0 0 0 14.63.7l32-19 32 19a13.25 13.25 0 0 0 14.63-.7 13.09 13.09 0 0 0 5-13.58l-8.43-35.73 28.15-24a13.07 13.07 0 0 0 4.05-13.96Zm-43.86 27a13.06 13.06 0 0 0-4.26 13l7.31 31-27.78-16.51a13.24 13.24 0 0 0-13.56 0L129.44 141l7.31-31a13 13 0 0 0-4.25-13l-24.26-20.62 32.09-2.72a13.16 13.16 0 0 0 11-7.94L164 36.24l12.64 29.48a13.18 13.18 0 0 0 11 7.94l32.09 2.72ZM85.66 125.66l-56 56a8 8 0 0 1-11.32-11.32l56-56a8 8 0 0 1 11.32 11.32Zm16 56-56 56a8 8 0 0 1-11.32-11.32l56-56a8 8 0 0 1 11.32 11.32Zm72-11.32a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32-11.32l56-56a8 8 0 0 1 11.32 0Z" />
  </Svg>
);
const Memo = memo(SvgShootingStar);
export default Memo;
