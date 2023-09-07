import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberEightLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M151.62 119.45a46 46 0 1 0-47.24 0 54 54 0 1 0 47.24 0ZM94 80a34 34 0 1 1 34 34 34 34 0 0 1-34-34Zm34 130a42 42 0 1 1 42-42 42 42 0 0 1-42 42Z" />
  </Svg>
);
const Memo = memo(SvgNumberEightLight);
export default Memo;
