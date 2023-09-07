import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingCartSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M92 216a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm92-12a12 12 0 1 0 12 12 12 12 0 0 0-12-12Zm43.82-130.82-28.52 92.7A19.9 19.9 0 0 1 180.18 180H84.07a20.08 20.08 0 0 1-19.23-14.51L28.67 38.9a4 4 0 0 0-3.85-2.9H8a4 4 0 0 1 0-8h16.82a12.05 12.05 0 0 1 11.54 8.7L45.3 68H224a4 4 0 0 1 3.82 5.18ZM218.58 76h-171l24.94 87.3a12.05 12.05 0 0 0 11.55 8.7h96.11a11.94 11.94 0 0 0 11.47-8.47Z" />
  </Svg>
);
const Memo = memo(SvgShoppingCartSimpleThin);
export default Memo;
