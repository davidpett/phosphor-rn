import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberTwoBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M180 208a12 12 0 0 1-12 12H88a12 12 0 0 1-9.6-19.2l71.95-95.92a28 28 0 1 0-48-28.06 12 12 0 0 1-22-9.62 52.32 52.32 0 0 1 6.13-10.49 52 52 0 0 1 83.06 62.59L112 196h56a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgNumberTwoBold);
export default Memo;
