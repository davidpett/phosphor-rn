import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClockCountdownThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 136.33A100.13 100.13 0 1 1 119.67 28a4 4 0 1 1 .66 8A92.13 92.13 0 1 0 220 135.67a4 4 0 1 1 8 .66ZM128 132h56a4 4 0 0 0 0-8h-52V72a4 4 0 0 0-8 0v56a4 4 0 0 0 4 4Zm32-88a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm36 24a8 8 0 1 0-8-8 8 8 0 0 0 8 8Zm24 36a8 8 0 1 0-8-8 8 8 0 0 0 8 8Z" />
  </Svg>
);
const Memo = memo(SvgClockCountdownThin);
export default Memo;
