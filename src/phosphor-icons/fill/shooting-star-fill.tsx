import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShootingStarFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m235.39 84.07-28.15 24 8.43 35.73a13.09 13.09 0 0 1-5 13.58 13.25 13.25 0 0 1-14.63.7l-32-19-32 19a13.25 13.25 0 0 1-14.63-.7 13.1 13.1 0 0 1-5-13.58l8.43-35.73-28.16-24A13.13 13.13 0 0 1 100.1 61l37.23-3.15L151.85 24a13.24 13.24 0 0 1 24.31 0l14.52 33.87L227.9 61a13.12 13.12 0 0 1 7.49 23.06ZM85.66 114.34a8 8 0 0 0-11.32 0l-56 56a8 8 0 0 0 11.32 11.32l56-56a8 8 0 0 0 0-11.32Zm16 56a8 8 0 0 0-11.32 0l-56 56a8 8 0 0 0 11.32 11.32l56-56a8 8 0 0 0 0-11.32Zm60.69 0-56 56a8 8 0 0 0 11.32 11.32l56-56a8 8 0 0 0-11.31-11.32Z" />
  </Svg>
);
const Memo = memo(SvgShootingStarFill);
export default Memo;
