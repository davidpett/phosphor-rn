import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSpadeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M133.37 13.27a12 12 0 0 0-10.74 0C118.44 15.36 20 65.4 20 136a60 60 0 0 0 69.51 59.25l-5.28 26.4A12 12 0 0 0 96 236h64a12 12 0 0 0 11.77-14.35l-5.28-26.4A60 60 0 0 0 236 136c0-70.6-98.44-120.64-102.63-122.73ZM176 172a35.88 35.88 0 0 1-19.09-5.47 12 12 0 0 0-18.14 12.52l6.59 32.95h-34.72l6.59-32.95a12 12 0 0 0-18.14-12.52A36 36 0 0 1 44 136c0-28.29 23.57-53.95 43.34-70.49A274.68 274.68 0 0 1 128 37.63a274.16 274.16 0 0 1 40.66 27.88C188.43 82.05 212 107.71 212 136a36 36 0 0 1-36 36Z" />
  </Svg>
);
const Memo = memo(SvgSpadeBold);
export default Memo;
