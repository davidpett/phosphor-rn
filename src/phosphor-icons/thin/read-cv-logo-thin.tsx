import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgReadCvLogoThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m210.09 43.19-130.25-23a12 12 0 0 0-13.91 9.73l-29.75 169a12 12 0 0 0 9.73 13.9l130.26 23a11.58 11.58 0 0 0 2.11.19 12 12 0 0 0 11.79-9.92l29.75-169a12 12 0 0 0-9.73-13.9Zm1.85 12.51-29.75 169a4 4 0 0 1-4.63 3.25l-130.26-23a4 4 0 0 1-3.24-4.63l29.75-169a4 4 0 0 1 4.63-3.25l130.26 23a4 4 0 0 1 3.24 4.63Zm-27.8 19.47a4 4 0 0 1-3.93 3.3 4.14 4.14 0 0 1-.7-.06l-83-14.66a4 4 0 1 1 1.39-7.88l83 14.66a4 4 0 0 1 3.24 4.64Zm-5.54 31.51a4 4 0 0 1-3.94 3.31 3.39 3.39 0 0 1-.7-.07L91 95.27a4 4 0 1 1 1.39-7.88l83 14.66a4 4 0 0 1 3.21 4.63Zm-47 24.19a4 4 0 0 1-3.94 3.3 4.23 4.23 0 0 1-.7-.06l-41.49-7.33a4 4 0 1 1 1.39-7.87l41.49 7.32a4 4 0 0 1 3.21 4.64Z" />
  </Svg>
);
const Memo = memo(SvgReadCvLogoThin);
export default Memo;
