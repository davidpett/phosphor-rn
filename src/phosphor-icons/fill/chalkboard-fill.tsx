import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChalkboardFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 192h-8V56a16 16 0 0 0-16-16H40a16 16 0 0 0-16 16v136h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16Zm-24 0h-72v-16a8 8 0 0 1 8-8h56a8 8 0 0 1 8 8Zm0-48a8 8 0 0 1-16 0V72H56v112a8 8 0 0 1-16 0V64a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgChalkboardFill);
export default Memo;
