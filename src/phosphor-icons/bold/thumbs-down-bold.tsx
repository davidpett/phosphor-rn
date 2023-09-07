import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgThumbsDownBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m243.78 156.53-12-96A28 28 0 0 0 204 36H32a20 20 0 0 0-20 20v88a20 20 0 0 0 20 20h40.58l36.69 73.37A12 12 0 0 0 120 244a44.05 44.05 0 0 0 44-44v-12h52a28 28 0 0 0 27.78-31.47ZM68 140H36V60h32Zm151 22.65a4 4 0 0 1-3 1.35h-64a12 12 0 0 0-12 12v24a20 20 0 0 1-13.18 18.8L92 149.17V60h112a4 4 0 0 1 4 3.5l12 96a4 4 0 0 1-1 3.15Z" />
  </Svg>
);
const Memo = memo(SvgThumbsDownBold);
export default Memo;
