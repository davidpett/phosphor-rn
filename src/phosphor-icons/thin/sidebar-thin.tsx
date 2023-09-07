import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSidebarThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12ZM36 200v-52h20a4 4 0 0 0 0-8H36v-24h20a4 4 0 0 0 0-8H36V84h20a4 4 0 0 0 0-8H36V56a4 4 0 0 1 4-4h44v152H40a4 4 0 0 1-4-4Zm184 0a4 4 0 0 1-4 4H92V52h124a4 4 0 0 1 4 4Z" />
  </Svg>
);
const Memo = memo(SvgSidebarThin);
export default Memo;
