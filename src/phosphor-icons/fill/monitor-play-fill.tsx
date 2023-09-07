import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMonitorPlayFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 224a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm64-160v112a24 24 0 0 1-24 24H48a24 24 0 0 1-24-24V64a24 24 0 0 1 24-24h160a24 24 0 0 1 24 24Zm-68 56a8 8 0 0 0-3.71-6.75l-44-28A8 8 0 0 0 104 92v56a8 8 0 0 0 12.29 6.75l44-28A8 8 0 0 0 164 120Z" />
  </Svg>
);
const Memo = memo(SvgMonitorPlayFill);
export default Memo;
