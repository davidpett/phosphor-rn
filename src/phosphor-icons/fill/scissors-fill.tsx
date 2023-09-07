import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgScissorsFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M157.73 113.13a8 8 0 0 1 2.09-11.13l67.66-46.3a8 8 0 0 1 9 13.21l-67.67 46.3a8 8 0 0 1-11.12-2.09Zm80.87 85.07a8 8 0 0 1-11.12 2.09L136 137.69l-42.52 29.09a36 36 0 1 1-9-13.2L121.83 128l-37.38-25.58a36 36 0 1 1 9-13.2l143 97.86a8 8 0 0 1 2.15 11.12ZM72 180a12 12 0 1 0-12 12 12 12 0 0 0 12-12Zm0-104a12 12 0 1 0-12 12 12 12 0 0 0 12-12Z" />
  </Svg>
);
const Memo = memo(SvgScissorsFill);
export default Memo;
