import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHeartHalf = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M169.47 48.79a8 8 0 0 0-2.94-15.73C150.42 36.08 137 44.18 128 56c-11.26-15-29.36-24-50-24a62.07 62.07 0 0 0-62 62c0 70 103.79 126.67 108.21 129a7.93 7.93 0 0 0 7.58 0 332.57 332.57 0 0 0 41.09-27.22 8 8 0 1 0-9.76-12.67c-10.31 7.94-20 14.37-27.12 18.82V73.7c5.84-12.95 17.94-22 33.47-24.91ZM120 202c-26.42-16.59-88-60.29-88-108a46.06 46.06 0 0 1 46-46c18.91 0 34.86 9.78 42 25.64ZM232.55 96a8.85 8.85 0 0 1-.89 0 8 8 0 0 1-7.94-7.12 45.88 45.88 0 0 0-20.17-33.14 8 8 0 1 1 8.9-13.29 61.83 61.83 0 0 1 27.17 44.67 8 8 0 0 1-7.07 8.88Zm-2.09 35.62c-5.67 11.37-13.94 23-24.59 34.49a8 8 0 1 1-11.74-10.86c9.61-10.4 17-20.75 22-30.77a8 8 0 1 1 14.31 7.14Z" />
  </Svg>
);
const Memo = memo(SvgHeartHalf);
export default Memo;
