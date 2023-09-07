import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlagThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M37.39 45.06a4 4 0 0 0-1.39 3V216a4 4 0 0 0 8 0v-46.13c29.41-24.39 55.08-11.69 82.23 1.73 16.5 8.17 33.33 16.5 51.13 16.5 13.14 0 26.81-4.55 41.26-17.06a4 4 0 0 0 1.38-3v-120a4 4 0 0 0-6.62-3c-30 26-56 13.07-83.61-.57-28.7-14.19-58.37-28.85-92.38.59ZM212 166.17c-29.41 24.4-55.08 11.7-82.23-1.73-26.82-13.27-54.5-27-85.77-4.66V49.92c29.41-24.4 55.08-11.7 82.23 1.73 26.82 13.27 54.5 27 85.77 4.66Z" />
  </Svg>
);
const Memo = memo(SvgFlagThin);
export default Memo;
