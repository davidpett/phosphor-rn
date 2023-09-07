import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPercentFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 172a12 12 0 1 1-12-12 12 12 0 0 1 12 12ZM92 96a12 12 0 1 0-12-12 12 12 0 0 0 12 12Zm132-48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM64 84a28 28 0 1 0 28-28 28 28 0 0 0-28 28Zm128 88a28 28 0 1 0-28 28 28 28 0 0 0 28-28Zm-2.34-105.66a8 8 0 0 0-11.32 0l-112 112a8 8 0 0 0 11.32 11.32l112-112a8 8 0 0 0 0-11.32Z" />
  </Svg>
);
const Memo = memo(SvgPercentFill);
export default Memo;
