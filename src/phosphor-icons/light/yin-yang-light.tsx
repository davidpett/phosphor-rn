import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgYinYangLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26ZM38 128a90.1 90.1 0 0 1 90-90 42 42 0 0 1 0 84 54 54 0 0 0-44.88 84A90.06 90.06 0 0 1 38 128Zm90 90a42 42 0 0 1 0-84 54 54 0 0 0 44.88-84A90 90 0 0 1 128 218Zm12-42a12 12 0 1 1-12-12 12 12 0 0 1 12 12Zm-22-96a10 10 0 1 1 10 10 10 10 0 0 1-10-10Z" />
  </Svg>
);
const Memo = memo(SvgYinYangLight);
export default Memo;
