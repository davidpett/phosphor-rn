import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAngularLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.61 60.92-96-40a12 12 0 0 0-9.24 0l-96 40a12 12 0 0 0-7.28 12.67l16 120a12 12 0 0 0 6.52 9.14l80 40a12 12 0 0 0 10.74 0l80-40a12 12 0 0 0 6.52-9.14l16-120a12 12 0 0 0-7.26-12.67ZM197 184.11l-69 34.47-68.95-34.47L45.11 79.54 128 45l82.89 34.54ZM117.51 82.17l-40 72a12 12 0 1 0 21 11.66l7.66-13.83h43.66l7.68 13.83a12 12 0 1 0 21-11.66l-40-72a12 12 0 0 0-21 0Zm2 45.83 8.49-15.29 8.49 15.29Z" />
  </Svg>
);
const Memo = memo(SvgAngularLogoBold);
export default Memo;
