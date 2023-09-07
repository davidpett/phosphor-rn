import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandSwipeLeft = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 140v36c0 25.59-8.49 42.85-8.85 43.58A8 8 0 0 1 192 224a7.9 7.9 0 0 1-3.57-.85 8 8 0 0 1-3.58-10.73c.06-.12 7.16-14.81 7.16-36.42v-36a12 12 0 0 0-24 0v4a8 8 0 0 1-16 0v-20a12 12 0 0 0-24 0v12a8 8 0 0 1-16 0V68a12 12 0 0 0-24 0v108a8 8 0 0 1-14.79 4.23l-18.68-30-.14-.23a12 12 0 1 0-20.8 12l29.29 50a8 8 0 1 1-13.81 8l-29.32-50a28 28 0 0 1 48.41-28.17L72 148V68a28 28 0 0 1 56 0v30.7a28 28 0 0 1 38.65 16.69A28 28 0 0 1 208 140Zm32-92h-52.69l18.34-18.34a8 8 0 0 0-11.31-11.32l-32 32a8 8 0 0 0 0 11.32l32 32a8 8 0 0 0 11.31-11.32L187.31 64H240a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgHandSwipeLeft);
export default Memo;
