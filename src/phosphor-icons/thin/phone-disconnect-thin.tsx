import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPhoneDisconnectThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228.79 93C174.15 38.34 81.85 38.34 27.21 93c-18.52 18.5-20.31 45.81-4.36 66.39a12 12 0 0 0 13.83 3.77l49-17.39.15-.06a12 12 0 0 0 7.31-8.79l5.9-29.51a3.93 3.93 0 0 1 2.51-3 80.59 80.59 0 0 1 52.5-.12 3.94 3.94 0 0 1 2.52 2.94l6.24 29.77a12 12 0 0 0 7.29 8.69l.15.06 49.07 17.41a12 12 0 0 0 13.83-3.77c15.95-20.58 14.16-47.89-4.36-66.39Zm-2 61.51a4 4 0 0 1-4.61 1.21l-.15-.06L173 138.24a4 4 0 0 1-2.37-2.87l-6.21-29.75a12 12 0 0 0-7.75-8.87 88.63 88.63 0 0 0-57.74.14 12 12 0 0 0-7.72 9l-5.9 29.51a4 4 0 0 1-2.31 2.86l-49 17.38-.15.06a4 4 0 0 1-4.61-1.21c-13.42-17.3-11.9-40.26 3.69-55.85C58.65 72.85 93.33 60 128 60s69.35 12.89 95.13 38.68c15.58 15.55 17.11 38.51 3.69 55.81ZM220 200a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgPhoneDisconnectThin);
export default Memo;
