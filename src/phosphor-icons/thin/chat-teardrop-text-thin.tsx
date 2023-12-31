import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatTeardropTextThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M164 112a4 4 0 0 1-4 4H96a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4Zm-4 28H96a4 4 0 0 0 0 8h64a4 4 0 0 0 0-8Zm68-16a96.11 96.11 0 0 1-96 96H47.67A11.68 11.68 0 0 1 36 208.33V124a96 96 0 0 1 192 0Zm-8 0a88 88 0 0 0-176 0v84.33a3.67 3.67 0 0 0 3.67 3.67H132a88.1 88.1 0 0 0 88-88Z" />
  </Svg>
);
const Memo = memo(SvgChatTeardropTextThin);
export default Memo;
