import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgTextBThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M162.27 117.21A40 40 0 0 0 140 44H72a4 4 0 0 0-4 4v152a4 4 0 0 0 4 4h80a44 44 0 0 0 10.27-86.79ZM76 52h64a32 32 0 0 1 0 64H76Zm76 144H76v-72h76a36 36 0 0 1 0 72Z" />
  </Svg>
);
const Memo = memo(SvgTextBThin);
export default Memo;
