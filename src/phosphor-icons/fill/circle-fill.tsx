import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCircleFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 128A104 104 0 1 1 128 24a104.13 104.13 0 0 1 104 104Z" />
  </Svg>
);
const Memo = memo(SvgCircleFill);
export default Memo;
