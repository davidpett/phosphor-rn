import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCookieLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M163.07 164.93a10 10 0 1 1-14.14 0 10 10 0 0 1 14.14 0Zm-78.14-8a10 10 0 1 0 14.14 0 10 10 0 0 0-14.14 0Zm6.14-41.86a10 10 0 1 0-14.14 0 10 10 0 0 0 14.14 0Zm33.86 1.86a10 10 0 1 0 14.14 0 10 10 0 0 0-14.14 0ZM230 128A102 102 0 1 1 128 26a6 6 0 0 1 6 6 42 42 0 0 0 42 42 6 6 0 0 1 6 6 42 42 0 0 0 42 42 6 6 0 0 1 6 6Zm-12.18 5.65A54.09 54.09 0 0 1 170.3 85.7a54.09 54.09 0 0 1-48-47.53 90 90 0 1 0 95.47 95.48Z" />
  </Svg>
);
const Memo = memo(SvgCookieLight);
export default Memo;
