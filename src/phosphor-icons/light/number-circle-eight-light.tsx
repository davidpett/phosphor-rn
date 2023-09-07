import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberCircleEightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26Zm0 192a90 90 0 1 1 90-90 90.1 90.1 0 0 1-90 90Zm18.57-94.46a30 30 0 1 0-37.14 0 34 34 0 1 0 37.14 0ZM110 100a18 18 0 1 1 18 18 18 18 0 0 1-18-18Zm18 74a22 22 0 1 1 22-22 22 22 0 0 1-22 22Z" />
  </Svg>
);
const Memo = memo(SvgNumberCircleEightLight);
export default Memo;
