import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCoatHangerBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m244 168-96-72 19.2-14.4A12 12 0 0 0 172 72a44 44 0 0 0-87.66-5.48 12 12 0 1 0 23.82 3 20 20 0 0 1 39.09-2.92L121 86.24c-.15.1-.29.21-.43.32L12 168a20 20 0 0 0 12 36h208a20 20 0 0 0 12-36ZM36 180l92-69 92 69Z" />
  </Svg>
);
const Memo = memo(SvgCoatHangerBold);
export default Memo;
