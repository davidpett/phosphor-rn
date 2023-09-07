import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarHalfBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m237.13 117.4-5.24 4.6a12 12 0 0 1-17.28-16.52 12 12 0 0 1 2.39-23.9l8.7.75a20 20 0 0 1 11.39 35.07Zm-60.88 21.27a20 20 0 0 0-6.35 19.63l2.86 12.41a12 12 0 1 0 23.39-5.4l-2.34-10.11 6.08-5.31a12 12 0 1 0-15.78-18.08Zm-22 66.58a12 12 0 0 1-16.49 4l-9.76-5.91-49 29.76a20 20 0 0 1-29.8-21.66l13-56.24-43.33-37.8a20 20 0 0 1 11.39-35.07l57-4.93 22.3-53.14a20 20 0 0 1 36.82 0l22.3 53.14 8.33.72A12 12 0 0 1 175 102l-10.77-.93a19.92 19.92 0 0 1-16.69-12.19L140 71v111.55l10.23 6.21a12 12 0 0 1 4.03 16.49ZM116 182.55V71l-7.51 17.89A19.92 19.92 0 0 1 91.8 101.1l-50.14 4.34 38.09 33.23a20 20 0 0 1 6.35 19.63l-11.39 49.32Zm89.39 22.76a12 12 0 0 0-23.7 2.57 12 12 0 0 0-11.92 20.83l7.23 4.39a20 20 0 0 0 29.8-21.66Z" />
  </Svg>
);
const Memo = memo(SvgStarHalfBold);
export default Memo;
