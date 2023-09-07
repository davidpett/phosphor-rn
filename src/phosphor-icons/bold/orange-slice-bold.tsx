import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgOrangeSliceBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 76H12A12 12 0 0 0 0 88v4a128 128 0 0 0 256 0v-4a12 12 0 0 0-12-12ZM64.52 100h42.69l-22.54 39.05A63.87 63.87 0 0 1 64.52 100ZM128 112l22.94 39.73a63.76 63.76 0 0 1-45.88 0Zm43.33 27.05L148.79 100h42.69a63.87 63.87 0 0 1-20.15 39.05ZM128 196a104.15 104.15 0 0 1-103.7-96h16.07a88 88 0 0 0 175.26 0h16.07A104.15 104.15 0 0 1 128 196Z" />
  </Svg>
);
const Memo = memo(SvgOrangeSliceBold);
export default Memo;
