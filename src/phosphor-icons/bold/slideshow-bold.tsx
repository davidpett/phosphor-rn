import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlideshowBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M184 44H72a20 20 0 0 0-20 20v128a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20V64a20 20 0 0 0-20-20Zm-4 144H76V68h104Zm64-132v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0ZM36 56v144a12 12 0 0 1-24 0V56a12 12 0 0 1 24 0Z" />
  </Svg>
);
const Memo = memo(SvgSlideshowBold);
export default Memo;
