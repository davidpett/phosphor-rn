import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgVideoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 208a8 8 0 0 1-8 8H32a8 8 0 0 1 0-16h192a8 8 0 0 1 8 8Zm0-152v112a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16Zm-68 56a8 8 0 0 0-3.71-6.75l-44-28A8 8 0 0 0 104 84v56a8 8 0 0 0 12.29 6.75l44-28A8 8 0 0 0 164 112Z" />
  </Svg>
);
const Memo = memo(SvgVideoFill);
export default Memo;
