import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintBrushThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 28c-20.29 0-43.16 11.24-68 33.4-18.47 16.49-34.39 35.83-45 49.93A56 56 0 0 0 36 164c0 33.22-21.26 48-22.22 48.68A4 4 0 0 0 16 220h76a56 56 0 0 0 52.67-75c14.11-10.63 33.44-26.55 49.93-45C216.76 75.16 228 52.29 228 32a4 4 0 0 0-4-4ZM92 212H26.35C33.91 203.69 44 188.08 44 164a48 48 0 1 1 48 48Zm26.52-97.31c4.13-5.44 9.32-12 15.29-18.9a80.08 80.08 0 0 1 26.4 26.4c-6.94 6-13.46 11.16-18.9 15.29a56.32 56.32 0 0 0-22.79-22.79Zm47.77 2.14a88.17 88.17 0 0 0-27.12-27.12c21.83-24.28 52.09-51.08 80.65-53.53-2.45 28.56-29.25 58.82-53.53 80.65Z" />
  </Svg>
);
const Memo = memo(SvgPaintBrushThin);
export default Memo;
