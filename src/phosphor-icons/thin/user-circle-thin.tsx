import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserCircleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28ZM68.87 198.42a68 68 0 0 1 118.26 0 91.8 91.8 0 0 1-118.26 0Zm124.3-5.55a75.61 75.61 0 0 0-44.51-34 44 44 0 1 0-41.32 0 75.61 75.61 0 0 0-44.51 34 92 92 0 1 1 130.34 0ZM128 156a36 36 0 1 1 36-36 36 36 0 0 1-36 36Z" />
  </Svg>
);
const Memo = memo(SvgUserCircleThin);
export default Memo;
