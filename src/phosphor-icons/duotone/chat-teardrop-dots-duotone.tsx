import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatTeardropDotsDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path
      d="M224 124a92 92 0 0 1-92 92H47.67a7.66 7.66 0 0 1-7.67-7.67V124a92 92 0 0 1 92-92 92 92 0 0 1 92 92Z"
      opacity={0.2}
    />
    <Path d="M132 24A100.11 100.11 0 0 0 32 124v84.33A15.69 15.69 0 0 0 47.67 224H132a100 100 0 0 0 0-200Zm0 184H48v-84a84 84 0 1 1 84 84Zm12-80a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-44 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm88 0a12 12 0 1 1-12-12 12 12 0 0 1 12 12Z" />
  </Svg>
);
const Memo = memo(SvgChatTeardropDotsDuotone);
export default Memo;
