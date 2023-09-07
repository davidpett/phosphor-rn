import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowLineRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m184 128-72 72V56Z" opacity={0.2} />
    <Path d="M117.66 50.34A8 8 0 0 0 104 56v64H32a8 8 0 0 0 0 16h72v64a8 8 0 0 0 13.66 5.66l72-72a8 8 0 0 0 0-11.32ZM120 180.69V75.31L172.69 128ZM224 40v176a8 8 0 0 1-16 0V40a8 8 0 0 1 16 0Z" />
  </Svg>
);
const Memo = memo(SvgArrowLineRightDuotone);
export default Memo;
