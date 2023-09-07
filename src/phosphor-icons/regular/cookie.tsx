import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCookie = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164.49 163.51a12 12 0 1 1-17 0 12 12 0 0 1 17 0Zm-81-8a12 12 0 1 0 17 0 12 12 0 0 0-16.98 0Zm9-39a12 12 0 1 0-17 0 12 12 0 0 0 17-.02Zm48-1a12 12 0 1 0 0 17 12 12 0 0 0 0-17ZM232 128A104 104 0 1 1 128 24a8 8 0 0 1 8 8 40 40 0 0 0 40 40 8 8 0 0 1 8 8 40 40 0 0 0 40 40 8 8 0 0 1 8 8Zm-16.31 7.39A56.13 56.13 0 0 1 168.5 87.5a56.13 56.13 0 0 1-47.89-47.19 88 88 0 1 0 95.08 95.08Z" />
  </Svg>
);
const Memo = memo(SvgCookie);
export default Memo;
