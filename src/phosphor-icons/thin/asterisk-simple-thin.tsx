import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgAsteriskSimpleThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m209.48 99.71-75.06 30 52.74 67.8a4 4 0 0 1-.71 5.62 3.93 3.93 0 0 1-2.45.87 4 4 0 0 1-3.16-1.54L128 134.52l-52.84 67.94A4 4 0 0 1 72 204a4 4 0 0 1-2.45-.84 4 4 0 0 1-.71-5.62l52.74-67.8-75.06-30a4 4 0 1 1 3-7.42L124 122.09V40a4 4 0 0 1 8 0v82.09l74.51-29.8a4 4 0 1 1 3 7.42Z" />
  </Svg>
);
const Memo = memo(SvgAsteriskSimpleThin);
export default Memo;
