import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFunnel = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230.6 49.53A15.81 15.81 0 0 0 216 40H40a16 16 0 0 0-11.81 26.76l.08.09L96 139.17V216a16 16 0 0 0 24.87 13.32l32-21.34a16 16 0 0 0 7.13-13.32v-55.49l67.74-72.32.08-.09a15.8 15.8 0 0 0 2.78-17.23ZM40 56Zm108.34 72.28a15.92 15.92 0 0 0-4.34 10.89v55.49L112 216v-76.83a15.92 15.92 0 0 0-4.32-10.94L40 56h176Z" />
  </Svg>
);
const Memo = memo(SvgFunnel);
export default Memo;
