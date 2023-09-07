import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandsClappingFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 24V8a8 8 0 0 1 16 0v16a8 8 0 0 1-16 0Zm35.83 17a8 8 0 0 0 11-2.66l8-13.11a8 8 0 1 0-13.66-8.33l-8 13.1a8 8 0 0 0 2.65 11Zm47.44 12.59a8 8 0 0 0-10.06-5.16l-15 4.85a8 8 0 0 0 2.45 15.62 8.1 8.1 0 0 0 2.46-.39l15-4.85a8 8 0 0 0 5.14-10.11Zm-30 39.94a79.71 79.71 0 0 1-12.6 96.47 80 80 0 0 1-146.19 18l-35-60.63a26 26 0 0 1 19.18-38.77l-4-6.94A26 26 0 0 1 61 63a26 26 0 0 1 11.39-31.37 26 26 0 0 1 30.81 3.58A26 26 0 0 1 147.08 37l12 20.79a26 26 0 0 1 43.17 2.78Zm-27.68 91.08a63.65 63.65 0 0 0-6.4-48.61l-19-32.91a10 10 0 0 0-17.75 9.18L161.86 132a8 8 0 1 1-13.86 8l-35-60.47a10 10 0 0 0-17.37 9.87l24.62 42.6a8 8 0 1 1-13.85 8L73.83 83.66a10 10 0 1 0-17.32 10l16 27.72 20 34.64a8 8 0 1 1-13.86 8l-20-34.64a10 10 0 0 0-17.32 10l35 60.63a64 64 0 0 0 117.25-15.44Z" />
  </Svg>
);
const Memo = memo(SvgHandsClappingFill);
export default Memo;
