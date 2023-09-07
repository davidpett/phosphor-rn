import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowUDownRightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m228.24 172.24-48 48a6 6 0 0 1-8.48-8.48L209.51 174H88a62 62 0 0 1 0-124h88a6 6 0 0 1 0 12H88a50 50 0 0 0 0 100h121.51l-37.75-37.76a6 6 0 0 1 8.48-8.48l48 48a6 6 0 0 1 0 8.48Z" />
  </Svg>
);
const Memo = memo(SvgArrowUDownRightLight);
export default Memo;
