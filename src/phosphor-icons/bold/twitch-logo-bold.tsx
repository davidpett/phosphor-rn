import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTwitchLogoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H48a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h12v28a12 12 0 0 0 19.68 9.22L124.34 212h40.76a20.06 20.06 0 0 0 12.81-4.64l42.89-35.74a19.93 19.93 0 0 0 7.2-15.37V48a20 20 0 0 0-20-20Zm-4 126.38L163.66 188H122.9a20.06 20.06 0 0 0-12.81 4.64L84 214.38V200a12 12 0 0 0-12-12H52V52h152ZM156 136V88a12 12 0 0 1 24 0v48a12 12 0 0 1-24 0Zm-48 0V88a12 12 0 0 1 24 0v48a12 12 0 0 1-24 0Z" />
  </Svg>
);
const Memo = memo(SvgTwitchLogoBold);
export default Memo;
