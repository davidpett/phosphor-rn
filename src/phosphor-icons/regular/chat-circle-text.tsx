import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgChatCircleText = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M168 112a8 8 0 0 1-8 8H96a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-8 24H96a8 8 0 0 0 0 16h64a8 8 0 0 0 0-16Zm72-8a104 104 0 0 1-152.88 91.82l-34.05 11.35a16 16 0 0 1-20.24-20.24l11.35-34.05A104 104 0 1 1 232 128Zm-16 0a88 88 0 1 0-164.19 44.06 8 8 0 0 1 .66 6.54L40 216l37.4-12.47a7.85 7.85 0 0 1 2.53-.42 8 8 0 0 1 4 1.08A88 88 0 0 0 216 128Z" />
  </Svg>
);
const Memo = memo(SvgChatCircleText);
export default Memo;
