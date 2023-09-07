import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTerminalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M116 128a4 4 0 0 1-1.34 3l-72 64a4 4 0 1 1-5.32-6L106 128 37.34 67a4 4 0 0 1 5.32-6l72 64a4 4 0 0 1 1.34 3Zm100 60h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgTerminalThin);
export default Memo;
