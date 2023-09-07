import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRecordLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm0-160a70 70 0 1 0 70 70 70.08 70.08 0 0 0-70-70Zm0 128a58 58 0 1 1 58-58 58.07 58.07 0 0 1-58 58Z" />
  </Svg>
);
const Memo = memo(SvgRecordLight);
export default Memo;
