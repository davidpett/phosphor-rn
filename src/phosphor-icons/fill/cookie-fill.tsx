import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgCookieFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M224 120a40 40 0 0 1-40-40 8 8 0 0 0-8-8 40 40 0 0 1-40-40 8 8 0 0 0-8-8 104 104 0 1 0 104 104 8 8 0 0 0-8-8ZM75.51 99.51a12 12 0 1 1 0 17 12 12 0 0 1 0-17Zm25 73a12 12 0 1 1 0-17 12 12 0 0 1-.02 16.98Zm23-40a12 12 0 1 1 17 0 12 12 0 0 1-17-.02Zm41 48a12 12 0 1 1 0-17 12 12 0 0 1-.02 16.98Z" />
  </Svg>
);
const Memo = memo(SvgCookieFill);
export default Memo;
