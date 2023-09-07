import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPauseCircleLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90ZM110 96v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0Zm48 0v64a6 6 0 0 1-12 0V96a6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgPauseCircleLight);
export default Memo;
