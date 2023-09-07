import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowArcRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M232 88v64h-64Z" opacity={0.2} />
    <Path d="M235.06 80.61a8 8 0 0 0-8.72 1.73l-26.48 26.49A104 104 0 0 0 24 184a8 8 0 0 0 16 0 88 88 0 0 1 148.53-63.84l-26.19 26.18A8 8 0 0 0 168 160h64a8 8 0 0 0 8-8V88a8 8 0 0 0-4.94-7.39ZM224 144h-36.69L224 107.31Z" />
  </Svg>
);
const Memo = memo(SvgArrowArcRightDuotone);
export default Memo;
