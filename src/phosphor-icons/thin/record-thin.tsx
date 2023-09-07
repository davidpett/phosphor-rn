import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgRecordThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28Zm0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm0-160a68 68 0 1 0 68 68 68.07 68.07 0 0 0-68-68Zm0 128a60 60 0 1 1 60-60 60.07 60.07 0 0 1-60 60Z" />
  </Svg>
);
const Memo = memo(SvgRecordThin);
export default Memo;
