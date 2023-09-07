import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignRightSimpleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M230 56v144a6 6 0 0 1-12 0V56a6 6 0 0 1 12 0Zm-32 40v64a14 14 0 0 1-14 14H32a14 14 0 0 1-14-14V96a14 14 0 0 1 14-14h152a14 14 0 0 1 14 14Zm-12 0a2 2 0 0 0-2-2H32a2 2 0 0 0-2 2v64a2 2 0 0 0 2 2h152a2 2 0 0 0 2-2Z" />
  </Svg>
);
const Memo = memo(SvgAlignRightSimpleLight);
export default Memo;
