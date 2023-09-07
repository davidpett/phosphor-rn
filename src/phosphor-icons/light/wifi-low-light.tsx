import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgWifiLowLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M138 204a10 10 0 1 1-10-10 10 10 0 0 1 10 10Zm33.53-43.85a74 74 0 0 0-87.06 0 6 6 0 0 0 7.06 9.7 62 62 0 0 1 72.94 0 6 6 0 0 0 8.38-1.32 6 6 0 0 0-1.32-8.38Z" />
  </Svg>
);
const Memo = memo(SvgWifiLowLight);
export default Memo;
