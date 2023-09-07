import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSubtractBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M178 78A84 84 0 1 0 78 178 84 84 0 1 0 178 78Zm42 82a60.75 60.75 0 0 1-.38 6.65l-44-44a83.62 83.62 0 0 0 4-19.39A59.83 59.83 0 0 1 220 160ZM36 96a60 60 0 1 1 60 60 60.07 60.07 0 0 1-60-60Zm67.28 83.66a83.62 83.62 0 0 0 19.39-4l44 44a60.75 60.75 0 0 1-6.67.34 59.83 59.83 0 0 1-56.72-40.34Zm88.53 31.18-46.73-46.73a85 85 0 0 0 19-19l46.73 46.73a60.45 60.45 0 0 1-19 19Z" />
  </Svg>
);
const Memo = memo(SvgSubtractBold);
export default Memo;
