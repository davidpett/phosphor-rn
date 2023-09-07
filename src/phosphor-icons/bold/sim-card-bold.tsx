import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSimCardBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m216.49 79.51-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v176a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V88a12 12 0 0 0-3.51-8.49ZM196 212H60V44h87l49 49ZM88 112a12 12 0 0 0-12 12v64a12 12 0 0 0 12 12h80a12 12 0 0 0 12-12v-64a12 12 0 0 0-12-12Zm12 24h16v40h-16Zm56 40h-16v-40h16Z" />
  </Svg>
);
const Memo = memo(SvgSimCardBold);
export default Memo;
