import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDivideBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12ZM128 84a20 20 0 1 0-20-20 20 20 0 0 0 20 20Zm0 88a20 20 0 1 0 20 20 20 20 0 0 0-20-20Z" />
  </Svg>
);
const Memo = memo(SvgDivideBold);
export default Memo;
