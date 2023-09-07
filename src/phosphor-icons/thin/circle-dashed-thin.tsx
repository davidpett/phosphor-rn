import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircleDashedThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M155.87 36.06a4 4 0 0 1-3.87 3 4.29 4.29 0 0 1-1-.13 92 92 0 0 0-46 0 4 4 0 0 1-2-7.74 100.09 100.09 0 0 1 50 0 4 4 0 0 1 2.87 4.87ZM56.65 57.94a100.18 100.18 0 0 0-25 43.29 4 4 0 0 0 7.71 2.14 92.06 92.06 0 0 1 23-39.82 4 4 0 1 0-5.7-5.61Zm-17.29 94.68a4 4 0 0 0-7.71 2.14 100.08 100.08 0 0 0 25 43.31 4 4 0 1 0 5.71-5.61 91.91 91.91 0 0 1-23-39.84ZM151 217.09a92 92 0 0 1-46 0 4 4 0 0 0-2 7.75 100 100 0 0 0 50 0 4 4 0 1 0-2-7.74Zm70.58-67.25a4 4 0 0 0-4.92 2.79 92.12 92.12 0 0 1-23 39.82 4 4 0 1 0 5.7 5.61 100.18 100.18 0 0 0 25-43.29 4 4 0 0 0-2.78-4.93Zm-4.94-46.46a4 4 0 0 0 7.71-2.14 100.08 100.08 0 0 0-25-43.31 4 4 0 1 0-5.71 5.61 91.91 91.91 0 0 1 23 39.84Z" />
  </Svg>
);
const Memo = memo(SvgCircleDashedThin);
export default Memo;
