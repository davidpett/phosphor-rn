import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTimerThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 44a92 92 0 1 0 92 92 92.1 92.1 0 0 0-92-92Zm0 176a84 84 0 1 1 84-84 84.09 84.09 0 0 1-84 84Zm42.83-126.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 1 1-5.66-5.66l40-40a4 4 0 0 1 5.66 0ZM100 16a4 4 0 0 1 4-4h48a4 4 0 0 1 0 8h-48a4 4 0 0 1-4-4Z" />
  </Svg>
);
const Memo = memo(SvgTimerThin);
export default Memo;
