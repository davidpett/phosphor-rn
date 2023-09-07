import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFilmSlate = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 104H102.09L210 75.51a8 8 0 0 0 5.68-9.84l-8.16-30a15.93 15.93 0 0 0-19.42-11.13L35.81 64.74a15.75 15.75 0 0 0-9.7 7.4 15.51 15.51 0 0 0-1.55 12L32 111.56V200a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-88a8 8 0 0 0-8-8Zm-23.84-64 6 22.07-22.62 6-28.12-16.24Zm-66.69 17.6 28.12 16.24-36.94 9.75-28.12-16.22Zm-79.4 44.62-6-22.08 26.5-7L94.69 89.4ZM208 200H48v-80h160v80Z" />
  </Svg>
);
const Memo = memo(SvgFilmSlate);
export default Memo;
