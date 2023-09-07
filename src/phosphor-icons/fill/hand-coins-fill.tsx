import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandCoinsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128.09 57.38a36 36 0 0 1 55.17-27.82 4 4 0 0 1-.56 7A52.06 52.06 0 0 0 152 84c0 1.17 0 2.34.12 3.49a4 4 0 0 1-6 3.76 36 36 0 0 1-18.03-33.87ZM240 160.61a24.47 24.47 0 0 1-13.6 22l-.44.2-38.83 16.54a6.94 6.94 0 0 1-1.19.4l-64 16a7.93 7.93 0 0 1-1.94.25H16a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h28.69l22.62-22.63A31.82 31.82 0 0 1 89.94 112H140a28 28 0 0 1 27.25 34.45l41.84-9.62A24.61 24.61 0 0 1 240 160.61Zm-16 0a8.61 8.61 0 0 0-10.87-8.3l-.31.08-67 15.41a8.32 8.32 0 0 1-1.79.2H112a8 8 0 0 1 0-16h28a12 12 0 0 0 0-24H89.94a15.86 15.86 0 0 0-11.31 4.69L56 155.31V200h63l62.43-15.61 38-16.18a8.56 8.56 0 0 0 4.57-7.6ZM168 84a36 36 0 1 0 36-36 36 36 0 0 0-36 36Z" />
  </Svg>
);
const Memo = memo(SvgHandCoinsFill);
export default Memo;
