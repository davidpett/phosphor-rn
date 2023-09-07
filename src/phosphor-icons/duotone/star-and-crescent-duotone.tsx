import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarAndCrescentDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M152 206.4a88 88 0 1 1 0-156.8 88 88 0 0 0 0 156.8Zm65.06-91.75L214.39 80l-21.8 26.4L160 98.33 177.46 128 160 157.67l32.59-8.07 21.8 26.4 2.67-34.65L248 128Z"
      opacity={0.2}
    />
    <Path d="M155.64 199.28a80 80 0 0 1 0-142.56 8 8 0 0 0 0-14.25A94.93 94.93 0 0 0 112 32a96 96 0 0 0 0 192 94.93 94.93 0 0 0 43.64-10.47 8 8 0 0 0 0-14.25ZM112 208a80 80 0 1 1 22.4-156.84 96.08 96.08 0 0 0 0 153.68A79.82 79.82 0 0 1 112 208Zm139.17-87.35-26.5-11.43-2.31-29.84a8 8 0 0 0-14.14-4.47l-18.59 22.51-27.71-6.85a8 8 0 0 0-8.81 11.82L168.18 128l-15.07 25.61a8 8 0 0 0 8.81 11.82l27.71-6.85 18.59 22.51a8 8 0 0 0 14.14-4.47l2.31-29.84 26.5-11.43a8 8 0 0 0 0-14.7ZM213.89 134a8 8 0 0 0-4.8 6.73l-1.15 14.89-9.18-11.11a8 8 0 0 0-6.17-2.91 8.4 8.4 0 0 0-1.92.23l-14.12 3.5 7.81-13.27a8 8 0 0 0 0-8.12l-7.81-13.27 14.12 3.5a8 8 0 0 0 8.09-2.68l9.18-11.11 1.15 14.89a8 8 0 0 0 4.8 6.73l13.92 6Z" />
  </Svg>
);
const Memo = memo(SvgStarAndCrescentDuotone);
export default Memo;
