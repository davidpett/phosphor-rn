import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTennisBallDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M60.12 60.09A95.74 95.74 0 0 1 127.83 32 95.94 95.94 0 0 1 32 127.75a95.64 95.64 0 0 1 28.12-67.66ZM32 127.92v-.17Zm124.28 28.26a95.54 95.54 0 0 0-28.11 67.65A96 96 0 0 0 224 128.08a95.79 95.79 0 0 0-67.72 28.1ZM128.17 224v-.17Z"
      opacity={0.2}
    />
    <Path d="M201.57 54.46a104 104 0 1 0 0 147.08 103.4 103.4 0 0 0 0-147.08ZM65.75 65.77a87.63 87.63 0 0 1 53.66-25.31A87.31 87.31 0 0 1 94 94.06a87.42 87.42 0 0 1-53.62 25.35 87.58 87.58 0 0 1 25.37-53.64Zm-25.42 69.71a103.29 103.29 0 0 0 65-30.11 103.24 103.24 0 0 0 30.13-65 87.78 87.78 0 0 1 80.18 80.14 104 104 0 0 0-95.16 95.1 87.78 87.78 0 0 1-80.18-80.14Zm149.92 54.75a87.69 87.69 0 0 1-53.66 25.31 88 88 0 0 1 79-78.95 87.58 87.58 0 0 1-25.34 53.64Z" />
  </Svg>
);
const Memo = memo(SvgTennisBallDuotone);
export default Memo;
