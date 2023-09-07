import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeOutlineVerticalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 96a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm0 40a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm0-56a32 32 0 1 0-32-32 32 32 0 0 0 32 32Zm0-40a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm0 136a32 32 0 1 0 32 32 32 32 0 0 0-32-32Zm0 40a8 8 0 1 1 8-8 8 8 0 0 1-8 8Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeOutlineVerticalBold);
export default Memo;
