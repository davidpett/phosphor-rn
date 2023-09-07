import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCoinVerticalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M198.51 56.09C186.44 35.4 169.92 24 152 24h-48c-17.92 0-34.44 11.4-46.51 32.09C46.21 75.42 40 101 40 128s6.21 52.58 17.49 71.91C69.56 220.6 86.08 232 104 232h48c17.92 0 34.44-11.4 46.51-32.09C209.79 180.58 216 155 216 128s-6.21-52.58-17.49-71.91Zm1.28 63.91h-32a152.78 152.78 0 0 0-9.68-48h30.59c6.12 13.38 10.16 30 11.09 48Zm-20.6-64h-28.73a83.13 83.13 0 0 0-12-16H152c10 0 19.4 6 27.19 16ZM152 216h-13.51a83.13 83.13 0 0 0 12-16h28.73C171.4 210 162 216 152 216Zm36.7-32h-30.58a152.78 152.78 0 0 0 9.68-48h32c-.94 18-4.98 34.62-11.1 48Z" />
  </Svg>
);
const Memo = memo(SvgCoinVerticalFill);
export default Memo;
