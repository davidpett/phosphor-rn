import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowFatRightThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m234.83 125.17-96-96A4 4 0 0 0 132 32v44H48a12 12 0 0 0-12 12v80a12 12 0 0 0 12 12h84v44a4 4 0 0 0 2.47 3.7 4 4 0 0 0 4.36-.87l96-96a4 4 0 0 0 0-5.66ZM140 214.34V176a4 4 0 0 0-4-4H48a4 4 0 0 1-4-4V88a4 4 0 0 1 4-4h88a4 4 0 0 0 4-4V41.66L226.34 128Z" />
  </Svg>
);
const Memo = memo(SvgArrowFatRightThin);
export default Memo;
