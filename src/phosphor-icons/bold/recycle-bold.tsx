import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRecycleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M100 208a12 12 0 0 1-12 12H40a28 28 0 0 1-24.23-42l29.45-50.88-4.76 1.27a12 12 0 1 1-6.2-23.18l32.77-8.77a12 12 0 0 1 14.69 8.48l8.79 32.77a12 12 0 1 1-23.17 6.22L66.08 139l-29.5 51a4 4 0 0 0 3.42 6h48a12 12 0 0 1 12 12Zm28-172a3.87 3.87 0 0 1 3.46 2l29.45 50.87-4.75-1.27a12 12 0 1 0-6.16 23.18l32.77 8.79a12 12 0 0 0 14.69-8.48l8.74-32.79a12 12 0 1 0-23.2-6.22l-1.31 4.86L152.23 26a28 28 0 0 0-48.46 0L80.61 66a12 12 0 1 0 20.77 12l23.16-40a3.87 3.87 0 0 1 3.46-2Zm112.19 142-23.14-40a12 12 0 1 0-20.77 12l23.14 40a4 4 0 0 1-3.46 6H157l3.51-3.51a12 12 0 1 0-17-17l-24 24a12 12 0 0 0 0 17l24 24a12 12 0 1 0 17-17L157 220h59a28 28 0 0 0 24.23-42Z" />
  </Svg>
);
const Memo = memo(SvgRecycleBold);
export default Memo;
