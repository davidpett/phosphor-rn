import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTreeBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M201.18 59.63a80 80 0 0 0-146.36 0A76.29 76.29 0 0 0 12 127.79c-.11 41 33.1 75.15 74 76.19a75.84 75.84 0 0 0 30-5.31V232a12 12 0 0 0 24 0v-33.33a75.79 75.79 0 0 0 28 5.33h2c40.94-1 74.15-35.22 74-76.19a76.29 76.29 0 0 0-42.82-68.18ZM169.35 180a51.51 51.51 0 0 1-29.35-8.2v-36.38l41.37-20.69a12 12 0 1 0-10.74-21.46L140 108.58V88a12 12 0 0 0-24 0v44.58l-30.63-15.31a12 12 0 0 0-10.74 21.46L116 159.42v12.38a51.43 51.43 0 0 1-29.35 8.2 52 52 0 0 1-20.38-99.24 20 20 0 0 0 10.07-10.42 56 56 0 0 1 103.32 0 20 20 0 0 0 10.07 10.42A52 52 0 0 1 169.35 180Z" />
  </Svg>
);
const Memo = memo(SvgTreeBold);
export default Memo;
