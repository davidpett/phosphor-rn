import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFishSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M166 76a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm32.13 89.36c-27 27-69.69 38-127.22 33.17q2.41 19 7 40.19a6 6 0 0 1-4.58 7.14 6.29 6.29 0 0 1-1.29.14 6 6 0 0 1-5.85-4.72q-5.08-23.21-7.55-44-20.79-2.49-44-7.55A6 6 0 0 1 17.28 178q21.15 4.63 40.16 7.05c-4.87-57.51 6.23-100.16 33.19-127.17 43.05-43.15 111.54-31 124.84-28.1a14.06 14.06 0 0 1 10.75 10.75c2.88 13.29 15.05 81.79-28.09 124.83Zm-9.06-7.93a102.05 102.05 0 0 1-90.5-90.5c-24.34 24.85-34 64.91-29 119.46 54.58 5.06 94.64-4.62 119.5-28.96Zm25.42-114.36a2 2 0 0 0-1.56-1.56 171 171 0 0 0-49.84-2.78c-21 2-38.8 8.24-53.08 18.43A90 90 0 0 0 198.84 146c10.19-14.28 16.39-32.06 18.43-53.08a171 171 0 0 0-2.78-49.85Z" />
  </Svg>
);
const Memo = memo(SvgFishSimpleLight);
export default Memo;
