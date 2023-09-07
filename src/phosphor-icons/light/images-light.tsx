import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgImagesLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42H72a14 14 0 0 0-14 14v18H40a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14v-18h18a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM70 56a2 2 0 0 1 2-2h144a2 2 0 0 1 2 2v67.57l-13.47-13.47a14 14 0 0 0-19.8 0l-21.42 21.41L117.9 86.1a14 14 0 0 0-19.8 0L70 114.2Zm116 144a2 2 0 0 1-2 2H40a2 2 0 0 1-2-2V88a2 2 0 0 1 2-2h18v82a14 14 0 0 0 14 14h114Zm30-30H72a2 2 0 0 1-2-2v-36.83l36.58-36.58a2 2 0 0 1 2.83 0l49.66 49.66a6 6 0 0 0 8.49 0l25.65-25.66a2 2 0 0 1 2.83 0l22 22V168a2 2 0 0 1-2.04 2Zm-54-86a10 10 0 1 1 10 10 10 10 0 0 1-10-10Z" />
  </Svg>
);
const Memo = memo(SvgImagesLight);
export default Memo;
