import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineUpThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M202.83 141.17a4 4 0 0 1-5.66 5.66L132 81.66V224a4 4 0 0 1-8 0V81.66l-65.17 65.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0ZM216 36H40a4 4 0 0 0 0 8h176a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineUpThin);
export default Memo;
