import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgHandSwipeRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M206 140v36c0 25.13-8.28 42-8.64 42.68A6 6 0 0 1 192 222a5.87 5.87 0 0 1-2.68-.64 6 6 0 0 1-2.68-8c.07-.14 7.37-15.19 7.37-37.32V140a14 14 0 0 0-28 0v4a6 6 0 0 1-12 0v-20a14 14 0 0 0-28 0v12a6 6 0 0 1-12 0V68a14 14 0 0 0-28 0v108a6 6 0 0 1-11.09 3.17l-18.68-30a1 1 0 0 1-.1-.17 14 14 0 0 0-24.25 14l29.29 50a6 6 0 1 1-10.37 6l-29.32-50a26 26 0 0 1 45-26.13L74 155V68a26 26 0 0 1 52 0v34.1a26 26 0 0 1 39.42 16.39A26 26 0 0 1 206 140Zm38.24-88.24-32-32a6 6 0 0 0-8.48 8.48L225.51 50H168a6 6 0 1 0 0 12h57.51l-21.75 21.76a6 6 0 1 0 8.48 8.48l32-32a6 6 0 0 0 0-8.48Z" />
  </Svg>
);
const Memo = memo(SvgHandSwipeRightLight);
export default Memo;
