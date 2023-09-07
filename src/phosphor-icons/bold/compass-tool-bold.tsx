import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCompassToolBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M218.68 125.46a12 12 0 1 0-21.37-10.92 75.15 75.15 0 0 1-27.66 29.64l-13.5-30.39A44 44 0 0 0 140 37.68V24a12 12 0 0 0-24 0v13.68a44 44 0 0 0-16.15 76.11L53 219.12A12 12 0 0 0 59.13 235a11.86 11.86 0 0 0 4.87 1 12 12 0 0 0 11-7.13l23.67-53.26A99.52 99.52 0 0 0 128 180a102.81 102.81 0 0 0 29.39-4.32L181 228.87a12 12 0 0 0 11 7.13 11.85 11.85 0 0 0 4.86-1 12 12 0 0 0 6.14-15.88l-23.51-52.9a99.39 99.39 0 0 0 39.19-40.76ZM128 60a20 20 0 1 1-20 20 20 20 0 0 1 20-20Zm0 96a75.8 75.8 0 0 1-19.52-2.53l13.3-29.92a43.21 43.21 0 0 0 12.44 0l13.33 30A79.11 79.11 0 0 1 128 156Z" />
  </Svg>
);
const Memo = memo(SvgCompassToolBold);
export default Memo;
