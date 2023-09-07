import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBowlFoodThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 108h-12.1a84 84 0 0 0-167.8 0H32a4 4 0 0 0-4 4 100.32 100.32 0 0 0 56 89.82V208a12 12 0 0 0 12 12h64a12 12 0 0 0 12-12v-6.18A100.32 100.32 0 0 0 228 112a4 4 0 0 0-4-4Zm-20.11 0h-62.84a75.92 75.92 0 0 1 50.16-38.14A75.45 75.45 0 0 1 203.89 108ZM186 62.93A83.92 83.92 0 0 0 132.08 108h-37.4A76.22 76.22 0 0 1 168 52c2.33 0 4.68.13 7 .34a76.81 76.81 0 0 1 11 10.59ZM128 36a75.48 75.48 0 0 1 34.3 8.21A84.26 84.26 0 0 0 86.41 108h-34.3A76.09 76.09 0 0 1 128 36Zm38.33 159.66a4 4 0 0 0-2.33 3.64v8.7a4 4 0 0 1-4 4H96a4 4 0 0 1-4-4v-8.7a4 4 0 0 0-2.33-3.64A92.33 92.33 0 0 1 36.09 116h183.82a92.33 92.33 0 0 1-53.58 79.66Z" />
  </Svg>
);
const Memo = memo(SvgBowlFoodThin);
export default Memo;
