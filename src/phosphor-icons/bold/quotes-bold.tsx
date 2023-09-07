import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgQuotesBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M100 52H40a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28 12 12 0 0 0 0 24 52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20Zm-4 80H44V76h52Zm120-80h-60a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h56v4a28 28 0 0 1-28 28 12 12 0 0 0 0 24 52.06 52.06 0 0 0 52-52V72a20 20 0 0 0-20-20Zm-4 80h-52V76h52Z" />
  </Svg>
);
const Memo = memo(SvgQuotesBold);
export default Memo;
