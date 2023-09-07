import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFishSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M172 76a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm30.37 93.61c-27.1 27.04-68.85 38.89-124.51 35.39q2.27 15.48 6 32.39a12 12 0 1 1-23.45 5.13q-4.56-20.9-7.05-39.92-19-2.49-39.89-7.06a12 12 0 0 1 5.13-23.45q16.89 3.7 32.36 6c-3.44-55.64 8.41-97.37 35.46-124.48C131.65 8.26 202.93 20.9 216.76 23.89a20.1 20.1 0 0 1 15.35 15.35c2.99 13.83 15.63 85.11-29.73 130.36Zm-27.09-8.43a107.09 107.09 0 0 1-51.65-28.81 107.23 107.23 0 0 1-28.81-51.66c-16.49 23-23.08 56.51-19.7 100.14 43.63 3.39 77.15-3.19 100.17-19.68Zm33.88-114.34a165.65 165.65 0 0 0-45.47-2.16c-18.67 1.81-34.58 7-47.55 15.54a83.92 83.92 0 0 0 79.64 79.64c8.51-13 13.73-28.88 15.54-47.55a165.65 165.65 0 0 0-2.16-45.47Z" />
  </Svg>
);
const Memo = memo(SvgFishSimpleBold);
export default Memo;
