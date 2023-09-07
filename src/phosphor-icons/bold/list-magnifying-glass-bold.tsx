import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListMagnifyingGlassBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M28 64a12 12 0 0 1 12-12h176a12 12 0 0 1 0 24H40a12 12 0 0 1-12-12Zm12 76h64a12 12 0 0 0 0-24H40a12 12 0 0 0 0 24Zm80 40H40a12 12 0 0 0 0 24h80a12 12 0 0 0 0-24Zm120.49 20.49a12 12 0 0 1-17 0l-18.08-18.08a44 44 0 1 1 17-17l18.08 18.07a12 12 0 0 1 0 17.01ZM184 164a20 20 0 1 0-20-20 20 20 0 0 0 20 20Z" />
  </Svg>
);
const Memo = memo(SvgListMagnifyingGlassBold);
export default Memo;
