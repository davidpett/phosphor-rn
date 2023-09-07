import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgLockOpenThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 84H92V56a36 36 0 0 1 36-36c17.24 0 32.75 12.38 36.08 28.8a4 4 0 1 0 7.84-1.6C167.78 26.81 149.31 12 128 12a44.05 44.05 0 0 0-44 44v28H48a12 12 0 0 0-12 12v112a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V96a12 12 0 0 0-12-12Zm4 124a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V96a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-76-56a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgLockOpenThin);
export default Memo;
