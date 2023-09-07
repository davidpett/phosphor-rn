import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFlagCheckeredFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M219.32 40.75a8 8 0 0 0-8.56 1.25c-28 24.22-51.72 12.48-79.21-1.13C103.07 26.76 70.78 10.79 34.76 42A8 8 0 0 0 32 48v168a8 8 0 0 0 16 0v-44.23c26.79-21.16 49.87-9.75 76.45 3.41 16.4 8.11 34.06 16.85 53 16.85 13.93 0 28.54-4.75 43.82-18a8 8 0 0 0 2.76-6V48a8 8 0 0 0-4.71-7.25ZM48 152.44v-46.56c16.85-11.28 32.64-11.59 48-7.34v47.74c-15.13-3.81-31.13-3.57-48 6.16Zm160 11.81c-16.87 13.32-32.27 13.72-48 8.91v-47.67c-21.62-6-42.38-21-64-26.95V42.87c9.25 2.83 18.61 7.45 28.45 12.32 11.26 5.57 23.11 11.43 35.55 14.56v55.74c15.35 4.25 31.14 3.94 48-7.35Z" />
  </Svg>
);
const Memo = memo(SvgFlagCheckeredFill);
export default Memo;
