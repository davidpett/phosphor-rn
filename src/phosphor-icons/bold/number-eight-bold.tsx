import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberEightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M162.44 118.91a52 52 0 1 0-68.88 0 60 60 0 1 0 68.88 0ZM100 80a28 28 0 1 1 28 28 28 28 0 0 1-28-28Zm28 124a36 36 0 1 1 36-36 36 36 0 0 1-36 36Z" />
  </Svg>
);
const Memo = memo(SvgNumberEightBold);
export default Memo;
