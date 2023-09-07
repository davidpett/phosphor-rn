import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatTeardropTextFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M132 24A100.11 100.11 0 0 0 32 124v84.33A15.69 15.69 0 0 0 47.67 224H132a100 100 0 0 0 0-200Zm28 128H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Zm0-32H96a8 8 0 0 1 0-16h64a8 8 0 0 1 0 16Z" />
  </Svg>
);
const Memo = memo(SvgChatTeardropTextFill);
export default Memo;
