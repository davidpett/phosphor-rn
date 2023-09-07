import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircleHalfTilt = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201.54 54.46A104 104 0 0 0 54.46 201.54 104 104 0 0 0 201.54 54.46ZM184 195.87a87.16 87.16 0 0 1-16 10.5V99.31l16-16Zm-80-32.56 16-16v68.28a88.37 88.37 0 0 1-16-3Zm-16 43.06a87 87 0 0 1-16.3-10.76l16.3-16.3Zm48-75.06 16-16v97.32a88.37 88.37 0 0 1-16 3ZM40 128a88 88 0 0 1 144.3-67.61L60.38 184.31A87.34 87.34 0 0 1 40 128Zm160 50.59V77.41a88 88 0 0 1 0 101.18Z" />
  </Svg>
);
const Memo = memo(SvgCircleHalfTilt);
export default Memo;
