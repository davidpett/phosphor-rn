import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShapes = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M71.59 61.47a8 8 0 0 0-15.18 0l-40 120A8 8 0 0 0 24 192h80a8 8 0 0 0 7.59-10.53ZM35.1 176 64 89.3 92.9 176ZM208 76a52 52 0 1 0-52 52 52.06 52.06 0 0 0 52-52Zm-88 0a36 36 0 1 1 36 36 36 36 0 0 1-36-36Zm104 68h-88a8 8 0 0 0-8 8v56a8 8 0 0 0 8 8h88a8 8 0 0 0 8-8v-56a8 8 0 0 0-8-8Zm-8 56h-72v-40h72Z" />
  </Svg>
);
const Memo = memo(SvgShapes);
export default Memo;
