import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberFourLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M182 152a6 6 0 0 1-6 6h-18v50a6 6 0 0 1-12 0v-50H72a6 6 0 0 1-5.65-8l40-112a6 6 0 0 1 11.3 4L80.51 146H146V96a6 6 0 0 1 12 0v50h18a6 6 0 0 1 6 6Z" />
  </Svg>
);
const Memo = memo(SvgNumberFourLight);
export default Memo;
