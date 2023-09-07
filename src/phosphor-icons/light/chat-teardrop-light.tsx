import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatTeardropLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 26a98.11 98.11 0 0 0-98 98v84.33A13.68 13.68 0 0 0 47.67 222H132a98 98 0 0 0 0-196Zm0 184H47.67a1.67 1.67 0 0 1-1.67-1.67V124a86 86 0 1 1 86 86Z" />
  </Svg>
);
const Memo = memo(SvgChatTeardropLight);
export default Memo;
