import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSmileySadThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92ZM84 108a8 8 0 1 1 8 8 8 8 0 0 1-8-8Zm88 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-.54 66a4 4 0 0 1-1.46 5.46 3.93 3.93 0 0 1-2 .54 4 4 0 0 1-3.46-2c-8.21-14.19-21.19-22-36.54-22s-28.33 7.81-36.54 22a4 4 0 0 1-6.92-4c9.55-16.52 25.4-26 43.46-26s33.91 9.48 43.46 26Z" />
  </Svg>
);
const Memo = memo(SvgSmileySadThin);
export default Memo;
