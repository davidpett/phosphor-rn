import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCampfireBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M227.43 227.63A12 12 0 0 1 216 236a11.81 11.81 0 0 1-3.64-.57L128 208.59l-84.36 26.84A11.86 11.86 0 0 1 40 236a12 12 0 0 1-3.64-23.44L88.42 196l-52.06-16.57a12 12 0 0 1 7.28-22.87L128 183.4l84.36-26.84a12 12 0 0 1 7.28 22.87L167.58 196l52.06 16.56a12 12 0 0 1 7.79 15.07ZM64 108c0-50.13 55.35-84.77 57.71-86.22a12 12 0 0 1 12.58 0C136.65 23.23 192 57.87 192 108a64 64 0 0 1-128 0Zm64 40a12 12 0 0 0 12-12c0-10.26-6.64-19-12-24.32-5.36 5.35-12 14.06-12 24.32a12 12 0 0 0 12 12Zm-40-40a39.74 39.74 0 0 0 4.85 19.07c4.67-24.88 27.42-40.34 28.49-41.06a12 12 0 0 1 13.32 0c1.07.72 23.82 16.18 28.49 41.06A39.74 39.74 0 0 0 168 108c0-10.34-3.93-26.74-22.64-46.18A142.75 142.75 0 0 0 128 46.6C115.36 56 88 79.67 88 108Z" />
  </Svg>
);
const Memo = memo(SvgCampfireBold);
export default Memo;
