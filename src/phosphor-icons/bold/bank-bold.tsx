import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgBankBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M24 108h20v48H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24h-12v-48h20a12 12 0 0 0 6.29-22.22l-104-64a12 12 0 0 0-12.58 0l-104 64A12 12 0 0 0 24 108Zm44 0h24v48H68Zm72 0v48h-24v-48Zm48 48h-24v-48h24ZM128 46.09 189.6 84H66.4ZM252 208a12 12 0 0 1-12 12H16a12 12 0 0 1 0-24h224a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgBankBold);
export default Memo;
