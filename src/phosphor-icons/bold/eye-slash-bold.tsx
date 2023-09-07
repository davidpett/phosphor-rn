import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgEyeSlashBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M56.88 31.93a12 12 0 1 0-17.76 16.14l16 17.65C20.67 88.66 5.72 121.58 5 123.13a12.08 12.08 0 0 0 0 9.75c.37.82 9.13 20.26 28.49 39.61C59.37 198.34 92 212 128 212a131.34 131.34 0 0 0 51-10l20.09 22.1a12 12 0 0 0 17.76-16.14ZM128 188c-29.59 0-55.47-10.73-76.91-31.88A130.69 130.69 0 0 1 29.52 128c5.27-9.31 18.79-29.9 42-44.29l90.09 99.11A109.33 109.33 0 0 1 128 188Zm123-55.12c-.36.81-9 20-28 39.16a12 12 0 1 1-17-16.9A130.48 130.48 0 0 0 226.48 128a130.36 130.36 0 0 0-21.57-28.12C183.46 78.73 157.59 68 128 68c-3.35 0-6.7.14-10 .42a12 12 0 1 1-2-23.91c3.93-.34 8-.51 12-.51 36 0 68.63 13.67 94.49 39.52 19.35 19.35 28.11 38.8 28.48 39.61a12.08 12.08 0 0 1 .03 9.75Z" />
  </Svg>
);
const Memo = memo(SvgEyeSlashBold);
export default Memo;
