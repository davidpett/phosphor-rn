import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScribbleLoopThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M243 157.32c-1.32-1.46-24.47-26.63-61.79-40.43-1.26-18.56-7.78-35.45-18.66-48.13C148.62 52.56 128.38 44 104 44c-49.49 0-81.9 44.58-83.26 46.48a4 4 0 0 0 6.51 4.65C27.56 94.7 58.68 52 104 52c22 0 40.11 7.6 52.45 22 9.11 10.61 14.81 24.62 16.46 40.13A137.84 137.84 0 0 0 132.6 108c-25.1 0-46.09 6.48-60.69 18.75C59.26 137.39 52 152.15 52 167.25a43.64 43.64 0 0 0 12.69 31.22C73.59 207.32 86 212 100.6 212c51.63 0 79.87-44.08 80.78-86.32 34.07 13.58 55.36 36.67 55.65 37a4 4 0 1 0 5.94-5.36Zm-88.4 21.47c-9.37 11.5-26.34 25.21-54 25.21-27.89 0-40.6-19-40.6-36.75C60 142.57 82.72 116 132.6 116a129.23 129.23 0 0 1 40.8 6.77v.81c0 20.42-6.86 40.52-18.83 55.21Z" />
  </Svg>
);
const Memo = memo(SvgScribbleLoopThin);
export default Memo;
