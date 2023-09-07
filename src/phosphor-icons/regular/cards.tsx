import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCards = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 72H40a16 16 0 0 0-16 16v112a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16Zm0 128H40V88h144v112Zm48-144v120a8 8 0 0 1-16 0V56H64a8 8 0 0 1 0-16h152a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgCards);
export default Memo;
