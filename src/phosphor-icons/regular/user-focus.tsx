import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgUserFocus = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 48v28a8 8 0 0 1-16 0V48h-28a8 8 0 0 1 0-16h28a16 16 0 0 1 16 16Zm-8 124a8 8 0 0 0-8 8v28h-28a8 8 0 0 0 0 16h28a16 16 0 0 0 16-16v-28a8 8 0 0 0-8-8ZM76 208H48v-28a8 8 0 0 0-16 0v28a16 16 0 0 0 16 16h28a8 8 0 0 0 0-16ZM40 84a8 8 0 0 0 8-8V48h28a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v28a8 8 0 0 0 8 8Zm136 92a8 8 0 0 1-6.41-3.19 52 52 0 0 0-83.2 0 8 8 0 1 1-12.8-9.62A67.94 67.94 0 0 1 101 141.51a40 40 0 1 1 53.94 0 67.94 67.94 0 0 1 27.43 21.68A8 8 0 0 1 176 176Zm-48-40a24 24 0 1 0-24-24 24 24 0 0 0 24 24Z" />
  </Svg>
);
const Memo = memo(SvgUserFocus);
export default Memo;
