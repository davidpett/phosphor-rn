import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCaretCircleLeftThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm18.83-129.17L109.66 128l37.17 37.17a4 4 0 0 1-5.66 5.66l-40-40a4 4 0 0 1 0-5.66l40-40a4 4 0 1 1 5.66 5.66Z" />
  </Svg>
);
const Memo = memo(SvgCaretCircleLeftThin);
export default Memo;
