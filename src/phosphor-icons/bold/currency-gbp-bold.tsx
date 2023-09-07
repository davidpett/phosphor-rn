import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyGbpBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M196 208a12 12 0 0 1-12 12H56a12 12 0 0 1 0-24h4a24 24 0 0 0 24-24v-32H56a12 12 0 0 1 0-24h28V84a56 56 0 0 1 91.63-43.21 12 12 0 0 1-15.28 18.51A31.66 31.66 0 0 0 140 52a32 32 0 0 0-32 32v32h28a12 12 0 0 1 0 24h-28v32a47.74 47.74 0 0 1-6.44 24H184a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyGbpBold);
export default Memo;
