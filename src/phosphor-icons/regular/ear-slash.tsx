import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEarSlash = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M213.92 210.62a8 8 0 1 1-11.84 10.76l-35-38.45A24 24 0 0 1 136 160a40.83 40.83 0 0 1 1.21-10L96 104.66a8 8 0 0 1-16-.66 47.84 47.84 0 0 1 2.22-14.46L64.5 70a71.47 71.47 0 0 0-8.5 34c0 26.7 8.53 34.92 17.57 43.64C82.21 156 92 165.41 92 188a36 36 0 0 0 36 36c10.24 0 18.45-4.16 25.83-13.09a8 8 0 1 1 12.34 10.18C155.81 233.64 143 240 128 240a52.06 52.06 0 0 1-52-52c0-15.79-5.68-21.27-13.54-28.84C52.46 149.5 40 137.5 40 104a87.26 87.26 0 0 1 13.21-46.38L42.08 45.38a8 8 0 1 1 11.84-10.76ZM91.09 42.17A72 72 0 0 1 200 104a8 8 0 0 0 16 0A88 88 0 0 0 82.87 28.44a8 8 0 1 0 8.22 13.73Zm69.23 85a8 8 0 0 0 10.78-3.44A41.93 41.93 0 0 0 176 104a48 48 0 0 0-63.57-45.42 8 8 0 0 0 5.19 15.14A32 32 0 0 1 160 104a26 26 0 0 1-3.12 12.34 8 8 0 0 0 3.44 10.78Z" />
  </Svg>
);
const Memo = memo(SvgEarSlash);
export default Memo;
