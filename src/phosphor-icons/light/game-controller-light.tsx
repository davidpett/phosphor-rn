import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGameControllerLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 110h-24a6 6 0 0 1 0-12h24a6 6 0 0 1 0 12Zm-72-12H94V88a6 6 0 0 0-12 0v10H72a6 6 0 0 0 0 12h10v10a6 6 0 0 0 12 0v-10h10a6 6 0 0 0 0-12Zm135.84 101.5A34 34 0 0 1 212 214a34.11 34.11 0 0 1-24-9.95l-.26-.28L147.38 158h-38.76l-40.31 45.76-.31.24a34 34 0 0 1-24 10 34 34 0 0 1-33.46-39.91s0-.06 0-.1L26.9 89.88A57.89 57.89 0 0 1 83.89 42H172a58.07 58.07 0 0 1 57.05 47.63v.19L245.46 174v.11a33.75 33.75 0 0 1-5.62 25.39ZM172 146a46 46 0 0 0 0-92H83.89a45.9 45.9 0 0 0-45.18 38 .36.36 0 0 0 0 .1l-16.38 84.13a22 22 0 0 0 37.11 19.45l42-47.65a6 6 0 0 1 4.5-2Zm61.67 30.23-9.79-50.35A58.06 58.06 0 0 1 172 158h-8.63l33.19 37.68a22 22 0 0 0 37.11-19.45Z" />
  </Svg>
);
const Memo = memo(SvgGameControllerLight);
export default Memo;
