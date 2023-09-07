import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowElbowRightUpDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 96h-96l48-48Z" opacity={0.2} />
    <Path d="m229.66 90.34-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 128 104h40v80H32a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8v-88h40a8 8 0 0 0 5.66-13.66ZM147.31 88 176 59.31 204.69 88Z" />
  </Svg>
);
const Memo = memo(SvgArrowElbowRightUpDuotone);
export default Memo;
