import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAlignCenterHorizontalFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 152v40a16 16 0 0 1-16 16h-72v16a8 8 0 0 1-16 0v-16H48a16 16 0 0 1-16-16v-40a16 16 0 0 1 16-16h72v-16H72a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h48V32a8 8 0 0 1 16 0v16h48a16 16 0 0 1 16 16v40a16 16 0 0 1-16 16h-48v16h72a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgAlignCenterHorizontalFill);
export default Memo;
