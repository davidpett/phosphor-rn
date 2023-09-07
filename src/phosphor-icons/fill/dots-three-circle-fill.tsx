import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgDotsThreeCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24ZM84 140a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm44 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12Zm44 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgDotsThreeCircleFill);
export default Memo;
