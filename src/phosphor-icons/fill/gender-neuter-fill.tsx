import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgGenderNeuterFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M167.84 108.35a40 40 0 1 1-36.19-36.19 40 40 0 0 1 36.19 36.19ZM216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16Zm-32 72a56 56 0 1 0-64 55.42v32.31a8.18 8.18 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8v-32.56A56.09 56.09 0 0 0 184 112Z" />
  </Svg>
);
const Memo = memo(SvgGenderNeuterFill);
export default Memo;
