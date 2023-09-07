import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCurrencyBtcFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 152a24 24 0 0 1-24 24h-40v-48h40a24 24 0 0 1 24 24Zm64-24A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104Zm-48 24a40 40 0 0 0-17.63-33.15A32 32 0 0 0 152 65v-9a8 8 0 0 0-16 0v8h-16v-8a8 8 0 0 0-16 0v8H88a8 8 0 0 0 0 16v96a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h16v8a8 8 0 0 0 16 0v-8.81A40.05 40.05 0 0 0 184 152Zm-24-56a16 16 0 0 0-16-16h-40v32h40a16 16 0 0 0 16-16Z" />
  </Svg>
);
const Memo = memo(SvgCurrencyBtcFill);
export default Memo;
