import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSunglassesThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 44a4 4 0 0 0 0 8 20 20 0 0 1 20 20v60H36V72a20 20 0 0 1 20-20 4 4 0 0 0 0-8 28 28 0 0 0-28 28v92a40 40 0 0 0 80 0v-24h40v24a40 40 0 0 0 80 0V72a28 28 0 0 0-28-28ZM36 164v-24h2.34l49.27 49.26A32 32 0 0 1 36 164Zm64 0a31.83 31.83 0 0 1-6.74 19.61L49.66 140H100Zm56 0v-24h2.34l49.27 49.26A32 32 0 0 1 156 164Zm57.26 19.61L169.66 140H220v24a31.83 31.83 0 0 1-6.74 19.61Z" />
  </Svg>
);
const Memo = memo(SvgSunglassesThin);
export default Memo;
