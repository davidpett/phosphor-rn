import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWaveSineBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M242.86 133.1c-23 49-43 70.9-64.82 70.9-27.64 0-43.8-34.44-60.9-70.9-7.14-15.32-14.61-31.1-22.22-42.37C88.39 81.09 82.53 76 78 76c-3.82 0-18.24 4.12-43.09 57.1a12 12 0 0 1-21.73-10.2c23-49 43-70.9 64.82-70.9 27.64 0 43.8 34.44 60.9 70.9 7.19 15.32 14.61 31.15 22.22 42.37 6.53 9.64 12.39 14.73 17 14.73 3.82 0 18.24-4.12 43.09-57.1a12 12 0 0 1 21.73 10.2Z" />
  </Svg>
);
const Memo = memo(SvgWaveSineBold);
export default Memo;
