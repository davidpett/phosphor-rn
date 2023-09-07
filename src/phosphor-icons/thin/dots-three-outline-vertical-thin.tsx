import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeOutlineVerticalThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 100a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm0-72a28 28 0 1 0-28-28 28 28 0 0 0 28 28Zm0-48a20 20 0 1 1-20 20 20 20 0 0 1 20-20Zm0 152a28 28 0 1 0 28 28 28 28 0 0 0-28-28Zm0 48a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeOutlineVerticalThin);
export default Memo;
