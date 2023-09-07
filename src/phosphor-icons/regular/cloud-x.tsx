import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCloudX = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M160 40a88.09 88.09 0 0 0-78.71 48.67A64 64 0 1 0 72 216h88a88 88 0 0 0 0-176Zm0 160H72a48 48 0 0 1 0-96c1.1 0 2.2 0 3.29.11A88 88 0 0 0 72 128a8 8 0 0 0 16 0 72 72 0 1 1 72 72Zm29.66-82.34L171.31 136l18.35 18.34a8 8 0 0 1-11.32 11.32L160 147.31l-18.34 18.35a8 8 0 0 1-11.32-11.32L148.69 136l-18.35-18.34a8 8 0 0 1 11.32-11.32L160 124.69l18.34-18.35a8 8 0 0 1 11.32 11.32Z" />
  </Svg>
);
const Memo = memo(SvgCloudX);
export default Memo;
