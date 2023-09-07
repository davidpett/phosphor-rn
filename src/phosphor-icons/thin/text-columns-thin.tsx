import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextColumnsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M116 64a4 4 0 0 1-4 4H40a4 4 0 0 1 0-8h72a4 4 0 0 1 4 4Zm-4 36H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8Zm0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8Zm0 40H40a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8Zm32-112h72a4 4 0 0 0 0-8h-72a4 4 0 0 0 0 8Zm72 32h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8Zm0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8Zm0 40h-72a4 4 0 0 0 0 8h72a4 4 0 0 0 0-8Z" />
  </Svg>
);
const Memo = memo(SvgTextColumnsThin);
export default Memo;
