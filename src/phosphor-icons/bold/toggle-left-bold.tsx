import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgToggleLeftBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M176 52H80a76 76 0 0 0 0 152h96a76 76 0 0 0 0-152Zm0 128H80a52 52 0 0 1 0-104h96a52 52 0 0 1 0 104ZM80 92a36 36 0 1 0 36 36 36 36 0 0 0-36-36Zm0 48a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgToggleLeftBold);
export default Memo;
