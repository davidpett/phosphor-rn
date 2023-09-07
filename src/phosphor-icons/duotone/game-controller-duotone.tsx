import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGameControllerDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M216.86 207.57a28 28 0 0 1-24.66-7.77L150.09 152H172a51.94 51.94 0 0 0 51.2-61l16.36 84.17a28 28 0 0 1-22.7 32.4Z"
      opacity={0.2}
    />
    <Path d="M176 112h-24a8 8 0 0 1 0-16h24a8 8 0 0 1 0 16Zm-72-16h-8v-8a8 8 0 0 0-16 0v8h-8a8 8 0 0 0 0 16h8v8a8 8 0 0 0 16 0v-8h8a8 8 0 0 0 0-16Zm137.48 104.65a36 36 0 0 1-54.94 4.81c-.12-.12-.24-.24-.35-.37L146.48 160h-37l-39.67 45.09-.35.37A36.08 36.08 0 0 1 44 216a36 36 0 0 1-35.44-42.25.68.68 0 0 1 0-.14l16.37-84.09A59.88 59.88 0 0 1 83.89 40H172a60.08 60.08 0 0 1 59 49.25v.18l16.37 84.17a.68.68 0 0 1 0 .14 35.74 35.74 0 0 1-5.89 26.91ZM172 144a44 44 0 0 0 0-88H83.89a43.9 43.9 0 0 0-43.21 36.37v.13L24.3 176.59A20 20 0 0 0 58 194.3l41.92-47.59a8 8 0 0 1 6-2.71Zm59.7 32.59-8.74-45A60 60 0 0 1 172 160h-4.2l30.2 34.31a20.09 20.09 0 0 0 17.46 5.39 20 20 0 0 0 16.23-23.11Z" />
  </Svg>
);
const Memo = memo(SvgGameControllerDuotone);
export default Memo;
