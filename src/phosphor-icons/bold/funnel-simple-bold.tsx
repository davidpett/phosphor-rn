import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgFunnelSimpleBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M204 128a12 12 0 0 1-12 12H64a12 12 0 0 1 0-24h128a12 12 0 0 1 12 12Zm28-60H24a12 12 0 0 0 0 24h208a12 12 0 0 0 0-24Zm-80 96h-48a12 12 0 0 0 0 24h48a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgFunnelSimpleBold);
export default Memo;
