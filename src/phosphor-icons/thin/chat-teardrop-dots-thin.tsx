import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatTeardropDotsThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 28a96.11 96.11 0 0 0-96 96v84.33A11.68 11.68 0 0 0 47.67 220H132a96 96 0 0 0 0-192Zm0 184H47.67a3.67 3.67 0 0 1-3.67-3.67V124a88 88 0 1 1 88 88Zm8-84a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm-44 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8Zm88 0a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgChatTeardropDotsThin);
export default Memo;
