import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextColumnsBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M120 64a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h68a12 12 0 0 1 12 12Zm-12 28H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24Zm0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24Zm0 40H40a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24Zm40-96h68a12 12 0 0 0 0-24h-68a12 12 0 0 0 0 24Zm68 16h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24Zm0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24Zm0 40h-68a12 12 0 0 0 0 24h68a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgTextColumnsBold);
export default Memo;
