import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNyTimesLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M192 148a16 16 0 1 1-16-16 16 16 0 0 1 16 16Zm-4-40a11.84 11.84 0 0 1-5.07-1.13l-64.68-30.18a68 68 0 0 0-57.83 59.89l65.93-35.17A12 12 0 0 1 144 112v98.11a67.71 67.71 0 0 0 44.75-35.52 12 12 0 1 1 21.42 10.82 91.54 91.54 0 0 1-76 50.38 12.13 12.13 0 0 1-2.17.21c-.35 0-.68 0-1-.05-1 0-2 .05-3 .05a92 92 0 0 1-81.64-134.39A40 40 0 0 1 68 28a11.84 11.84 0 0 1 5.07 1.13l117.24 54.7A16 16 0 0 0 188 52a12 12 0 0 1 0-24 40 40 0 0 1 0 80ZM80 192.12v-38.79l-17.39 9.28A68.13 68.13 0 0 0 80 192.12ZM120 132l-16 8.53v67.08a67.1 67.1 0 0 0 16 3.9ZM86.5 61.88l-20.81-9.71a16 16 0 0 0-5.58 29.74A92 92 0 0 1 86.5 61.88Z" />
  </Svg>
);
const Memo = memo(SvgNyTimesLogoBold);
export default Memo;
