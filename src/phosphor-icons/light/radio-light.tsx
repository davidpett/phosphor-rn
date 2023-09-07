import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadioLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M102 112a6 6 0 0 1-6 6H64a6 6 0 0 1 0-12h32a6 6 0 0 1 6 6Zm-6 26H64a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm0 32H64a6 6 0 0 0 0 12h32a6 6 0 0 0 0-12Zm134-82v112a14 14 0 0 1-14 14H40a14 14 0 0 1-14-14V80a6 6 0 0 1 4.28-5.75l160-48a6 6 0 0 1 3.44 11.5L72.88 74H216a14 14 0 0 1 14 14Zm-12 0a2 2 0 0 0-2-2H38v114a2 2 0 0 0 2 2h176a2 2 0 0 0 2-2Zm-20 56a38 38 0 1 1-38-38 38 38 0 0 1 38 38Zm-12 0a26 26 0 1 0-26 26 26 26 0 0 0 26-26Z" />
  </Svg>
);
const Memo = memo(SvgRadioLight);
export default Memo;
