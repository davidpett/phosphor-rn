import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMinusSquareBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H52V52h152ZM76 128a12 12 0 0 1 12-12h80a12 12 0 0 1 0 24H88a12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgMinusSquareBold);
export default Memo;
