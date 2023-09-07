import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberEight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M155.55 119.27a48 48 0 1 0-55.1 0 56 56 0 1 0 55.1 0ZM96 80a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm32 128a40 40 0 1 1 40-40 40 40 0 0 1-40 40Z" />
  </Svg>
);
const Memo = memo(SvgNumberEight);
export default Memo;
