import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196.42 66.23a4 4 0 0 1-2-2.09 72 72 0 0 0-132.82 0 4 4 0 0 1-2 2.09A68.23 68.23 0 0 0 20 127.81c-.1 36.66 29.62 67.24 66.25 68.17A67.74 67.74 0 0 0 124 185.67V232a4 4 0 0 0 8 0v-46.33A67.47 67.47 0 0 0 168 196h1.76c36.62-.93 66.34-31.51 66.24-68.17a68.23 68.23 0 0 0-39.58-61.6ZM169.55 188a59.43 59.43 0 0 1-34.85-10.1 12.39 12.39 0 0 0-2.7-1.35v-46.08l45.79-22.89a4 4 0 1 0-3.58-7.16L132 121.53V88a4 4 0 0 0-8 0v57.53l-42.21-21.11a4 4 0 1 0-3.58 7.16L124 154.47v22.08a12.39 12.39 0 0 0-2.7 1.35A59.36 59.36 0 0 1 86.45 188 60 60 0 0 1 62.93 73.49a11.92 11.92 0 0 0 6-6.25 64 64 0 0 1 118.08 0 11.92 11.92 0 0 0 6 6.25A60 60 0 0 1 169.55 188Z" />
  </Svg>
);
const Memo = memo(SvgTreeThin);
export default Memo;
