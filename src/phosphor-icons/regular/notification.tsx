import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNotification = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 128v80a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h80a8 8 0 0 1 0 16H48v152h152v-80a8 8 0 0 1 16 0Zm16-68a36 36 0 1 1-36-36 36 36 0 0 1 36 36Zm-16 0a20 20 0 1 0-20 20 20 20 0 0 0 20-20Z" />
  </Svg>
);
const Memo = memo(SvgNotification);
export default Memo;
