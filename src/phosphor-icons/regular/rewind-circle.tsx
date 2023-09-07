import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRewindCircle = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm51.77-127a8 8 0 0 0-8.21.39l-48 32a8 8 0 0 0 0 13.32l48 32A8 8 0 0 0 176 168a8 8 0 0 0 8-8V96a8 8 0 0 0-4.23-7ZM168 145.05 142.42 128 168 111ZM115.77 89a8 8 0 0 0-8.21.39l-48 32a8 8 0 0 0 0 13.32l48 32A8 8 0 0 0 112 168a8 8 0 0 0 8-8V96a8 8 0 0 0-4.23-7ZM104 145.05 78.42 128 104 111Z" />
  </Svg>
);
const Memo = memo(SvgRewindCircle);
export default Memo;
