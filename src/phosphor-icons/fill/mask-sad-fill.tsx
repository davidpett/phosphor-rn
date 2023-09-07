import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMaskSadFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M217 34.8a15.94 15.94 0 0 0-14.82-1.71c-14.03 5.46-42.36 14.62-74.18 14.62s-60.16-9.16-74.21-14.62A16 16 0 0 0 32 48v55.77c0 35.84 9.65 69.65 27.18 95.18 18.16 26.46 42.6 41 68.82 41s50.66-14.57 68.82-41c17.53-25.51 27.18-59.32 27.18-95.16V48a16 16 0 0 0-7-13.2ZM66 125.33a8 8 0 0 1 12-10.67c2.68 3 8.85 5.34 14 5.34s11.36-2.35 14-5.34a8 8 0 0 1 12 10.67c-5.75 6.38-16.18 10.67-26 10.67s-20.25-4.29-26-10.67Zm92.62 63.1A8 8 0 0 1 152 192a7.92 7.92 0 0 1-4.42-1.34C141.07 186.34 136 184 128 184s-13.07 2.34-19.57 6.66a8 8 0 0 1-8.86-13.32C108 171.73 116.06 168 128 168s20 3.73 28.43 9.34a8 8 0 0 1 2.23 11.09Zm31.3-63.1c-5.71 6.38-16.14 10.67-26 10.67s-20.25-4.29-26-10.67A8 8 0 0 1 150 114.66c2.68 3 8.85 5.34 14 5.34s11.36-2.35 14-5.34a8 8 0 0 1 12 10.67Z" />
  </Svg>
);
const Memo = memo(SvgMaskSadFill);
export default Memo;
