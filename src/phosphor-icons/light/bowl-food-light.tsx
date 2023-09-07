import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBowlFoodLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 106h-10.23a86 86 0 0 0-171.54 0H32a6 6 0 0 0-6 6 102.35 102.35 0 0 0 56 91.06V208a14 14 0 0 0 14 14h64a14 14 0 0 0 14-14v-4.94A102.35 102.35 0 0 0 230 112a6 6 0 0 0-6-6Zm-49.76-51.71a74.15 74.15 0 0 1 8.15 7.6A85.89 85.89 0 0 0 130.84 106h-33.5A74.24 74.24 0 0 1 168 54c2.08 0 4.17.11 6.24.29Zm16.06 17.85A73.49 73.49 0 0 1 201.74 106h-57.26a73.89 73.89 0 0 1 45.82-33.86ZM128 38a73.68 73.68 0 0 1 26.8 5 86.32 86.32 0 0 0-69.94 63h-30.6A74.09 74.09 0 0 1 128 38Zm37.5 155.84a6 6 0 0 0-3.5 5.46v8.7a2 2 0 0 1-2 2H96a2 2 0 0 1-2-2v-8.7a6 6 0 0 0-3.5-5.46A90.35 90.35 0 0 1 38.2 118h179.6a90.35 90.35 0 0 1-52.3 75.84Z" />
  </Svg>
);
const Memo = memo(SvgBowlFoodLight);
export default Memo;
