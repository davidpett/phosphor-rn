import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberFourBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M188 152a12 12 0 0 1-12 12h-12v44a12 12 0 0 1-24 0v-44H72a12 12 0 0 1-11.3-16l40-112a12 12 0 1 1 22.6 8L89 140h51V96a12 12 0 0 1 24 0v44h12a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgNumberFourBold);
export default Memo;
