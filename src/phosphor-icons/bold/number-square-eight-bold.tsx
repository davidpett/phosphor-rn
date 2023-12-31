import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberSquareEightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H52V52h152ZM88 152a40 40 0 1 0 67.6-28.91 36 36 0 1 0-55.2 0A39.87 39.87 0 0 0 88 152Zm40 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm-12-68a12 12 0 1 1 12 12 12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgNumberSquareEightBold);
export default Memo;
