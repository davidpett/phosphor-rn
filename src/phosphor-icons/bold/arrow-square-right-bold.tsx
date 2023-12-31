import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowSquareRightBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M208 28H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20Zm-4 176H52V52h152ZM76 128a12 12 0 0 1 12-12h51l-11.52-11.51a12 12 0 1 1 17-17l32 32a12 12 0 0 1 0 17l-32 32a12 12 0 1 1-17-17L139 140H88a12 12 0 0 1-12-12Z" />
  </Svg>
);
const Memo = memo(SvgArrowSquareRightBold);
export default Memo;
