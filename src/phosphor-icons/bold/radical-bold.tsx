import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRadicalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M244 72v24a12 12 0 0 1-24 0V84h-91.68L83.24 204.21a12 12 0 0 1-22.47 0l-48-128a12 12 0 1 1 22.47-8.43l36.76 98 36.77-98A12 12 0 0 1 120 60h112a12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgRadicalBold);
export default Memo;
