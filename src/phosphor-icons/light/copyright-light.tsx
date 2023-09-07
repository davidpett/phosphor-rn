import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCopyrightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm-34-90a34 34 0 0 0 61.2 20.4 6 6 0 0 1 9.6 7.21 46 46 0 1 1 0-55.22 6 6 0 0 1-9.6 7.21A34 34 0 0 0 94 128Z" />
  </Svg>
);
const Memo = memo(SvgCopyrightLight);
export default Memo;
