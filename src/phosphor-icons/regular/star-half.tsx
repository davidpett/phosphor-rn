import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgStarHalf = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m234.5 114.38-5.23 4.62a8 8 0 1 1-10.52-12l5.23-4.57v-.07l-8.67-.75a8 8 0 1 1 1.37-16l8.7.75a16 16 0 0 1 9.11 28.07Zm-60.7 43 2.86 12.41a8 8 0 1 0 15.59-3.6l-2.85-12.47 7.86-6.86a8 8 0 0 0-10.52-12.06l-7.86 6.87a16 16 0 0 0-5.08 15.73ZM136 51.15v133.66l.27.15 11.88 7.22a8 8 0 0 1-8.3 13.68L128 198.64l-51 31a16 16 0 0 1-23.84-17.34l13.45-58.5-45.11-39.42a16 16 0 0 1 9.11-28.07l59.46-5.14 23.21-55.36a15.95 15.95 0 0 1 29.44 0L166 81.17l10.74.93a8 8 0 0 1-1.38 16l-10.76-.93a16 16 0 0 1-13.35-9.75ZM119.73 185l.27-.15V51.15l-15.2 36.22a16 16 0 0 1-13.35 9.75L32 102.25a.58.58 0 0 0 0 .1l45.13 39.34a16 16 0 0 1 5.07 15.71l-13.52 58.54Zm79.91 13.25a8 8 0 0 0-15.59 3.61l3.3 14.14-11.19-6.8a8 8 0 1 0-8.31 13.68l11.23 6.82a16 16 0 0 0 23.84-17.34Z" />
  </Svg>
);
const Memo = memo(SvgStarHalf);
export default Memo;
