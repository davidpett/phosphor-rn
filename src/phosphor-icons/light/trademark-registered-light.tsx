import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTrademarkRegisteredLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm20.16-78.58A30 30 0 0 0 136 82h-32a6 6 0 0 0-6 6v80a6 6 0 0 0 12 0v-26h25.46L155 171.33a6 6 0 1 0 10-6.66ZM110 94h26a18 18 0 0 1 0 36h-26Z" />
  </Svg>
);
const Memo = memo(SvgTrademarkRegisteredLight);
export default Memo;
