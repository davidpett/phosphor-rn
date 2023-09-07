import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAnchorFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 144a56.06 56.06 0 0 1-56 56 32 32 0 0 0-32 32 8 8 0 0 1-16 0 32 32 0 0 0-32-32 56.06 56.06 0 0 1-56-56 8 8 0 0 1 16 0 40 40 0 0 0 40 40 47.79 47.79 0 0 1 32 12.27V128H88a8 8 0 0 1 0-16h32V82.83a28 28 0 1 1 16 0V112h32a8 8 0 0 1 0 16h-32v68.27A47.79 47.79 0 0 1 168 184a40 40 0 0 0 40-40 8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgAnchorFill);
export default Memo;
