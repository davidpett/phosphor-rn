import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadioactive = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 136H40a16 16 0 0 1-11.76-5.21 16.21 16.21 0 0 1-4.17-12.37 103.83 103.83 0 0 1 43.58-75.49A16 16 0 0 1 90.75 48l26 45a8 8 0 1 1-13.86 8l-26-45A87.83 87.83 0 0 0 40 119.86a.19.19 0 0 0 .07.16L92 120a8 8 0 0 1 0 16Zm139.93-17.58a103.83 103.83 0 0 0-43.58-75.49 16 16 0 0 0-23.1 5.07L139.3 93a8 8 0 0 0 13.86 8l26-45A87.87 87.87 0 0 1 216 119.86v.14h-52a8 8 0 0 0 0 16h52a16 16 0 0 0 11.76-5.21 16.21 16.21 0 0 0 4.17-12.37Zm-79 36.76a8 8 0 1 0-13.86 8l25.84 44.73a88.22 88.22 0 0 1-73.81 0l25.83-44.73a8 8 0 1 0-13.86-8l-25.82 44.73a16 16 0 0 0 7.12 22.52 104.24 104.24 0 0 0 87.26 0 16 16 0 0 0 7.12-22.52ZM128 140a12 12 0 1 0-12-12 12 12 0 0 0 12 12Z" />
  </Svg>
);
const Memo = memo(SvgRadioactive);
export default Memo;
