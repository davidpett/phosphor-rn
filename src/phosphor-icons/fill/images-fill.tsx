import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgImagesFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H72a16 16 0 0 0-16 16v16H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-16h16a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-44 32a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm12 128H40V88h16v80a16 16 0 0 0 16 16h112Zm32-32H72v-36l36-36 49.66 49.66a8 8 0 0 0 11.31 0L194.63 120 216 141.38V168Z" />
  </Svg>
);
const Memo = memo(SvgImagesFill);
export default Memo;
