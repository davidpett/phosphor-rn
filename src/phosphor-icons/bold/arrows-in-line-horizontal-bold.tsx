import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsInLineHorizontalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M140 40v176a12 12 0 0 1-24 0V40a12 12 0 0 1 24 0ZM64.49 87.51a12 12 0 0 0-17 17L59 116H16a12 12 0 0 0 0 24h43l-11.49 11.51a12 12 0 0 0 17 17l32-32a12 12 0 0 0 0-17ZM240 116h-43l11.52-11.51a12 12 0 0 0-17-17l-32 32a12 12 0 0 0 0 17l32 32a12 12 0 0 0 17-17L197 140h43a12 12 0 0 0 0-24Z" />
  </Svg>
);
const Memo = memo(SvgArrowsInLineHorizontalBold);
export default Memo;
