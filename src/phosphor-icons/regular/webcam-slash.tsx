import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWebcamSlash = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m213.92 210.62-160-176a8 8 0 1 0-11.84 10.76L58.82 63.8A80 80 0 0 0 120 183.6V200H32a8 8 0 0 0 0 16h165.19l4.89 5.38a8 8 0 1 0 11.84-10.76ZM64 104a63.65 63.65 0 0 1 6.26-27.62l18.42 20.26A40 40 0 0 0 128 144c1.2 0 2.39-.06 3.58-.17L150 164.11A64 64 0 0 1 64 104Zm72 96v-16.41a79.91 79.91 0 0 0 25.44-6.91l21.2 23.32ZM85.52 45.31a8 8 0 0 1 3-10.91 80 80 0 0 1 105 115.5 8 8 0 1 1-13.1-9.19 64 64 0 0 0-84-92.4 8 8 0 0 1-10.9-3Zm65.31 66.12A24 24 0 0 0 128 80a24.17 24.17 0 0 0-5.24.57A8 8 0 1 1 119.3 65a40 40 0 0 1 46.7 51.38 8 8 0 0 1-15.21-4.95Z" />
  </Svg>
);
const Memo = memo(SvgWebcamSlash);
export default Memo;
