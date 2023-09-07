import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeVerticalLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M118 60a10 10 0 1 1 10 10 10 10 0 0 1-10-10Zm10 58a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm0 68a10 10 0 1 0 10 10 10 10 0 0 0-10-10Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeVerticalLight);
export default Memo;
