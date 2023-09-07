import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEarLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M214 104a6 6 0 0 1-12 0 74 74 0 0 0-148 0c0 27.55 8.83 36.06 18.18 45.08 4.31 4.15 8.77 8.45 12.16 14.47C88.15 170.31 90 178.3 90 188a38 38 0 0 0 38 38c10.74 0 19.69-4.52 27.37-13.82a6 6 0 0 1 9.26 7.64C154.66 231.88 142.34 238 128 238a50.06 50.06 0 0 1-50-50c0-16.64-6.24-22.66-14.15-30.29C54.12 148.33 42 136.64 42 104a86 86 0 0 1 172 0Zm-37.14 58.81a6 6 0 0 0-8.19 2.19 10 10 0 0 1-18.67-5c0-10 5-16.67 10.8-24.4C167 127.35 174 118 174 104a46 46 0 0 0-92 0 6 6 0 0 0 12 0 34 34 0 0 1 68 0c0 10-5 16.67-10.8 24.4C145 136.65 138 146 138 160a22 22 0 0 0 41.05 11 6 6 0 0 0-2.19-8.19Z" />
  </Svg>
);
const Memo = memo(SvgEarLight);
export default Memo;
