import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSlidersHorizontalBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M40 92h30.06a36 36 0 0 0 67.88 0H216a12 12 0 0 0 0-24h-78.06a36 36 0 0 0-67.88 0H40a12 12 0 0 0 0 24Zm64-24a12 12 0 1 1-12 12 12 12 0 0 1 12-12Zm112 96h-14.06a36 36 0 0 0-67.88 0H40a12 12 0 0 0 0 24h94.06a36 36 0 0 0 67.88 0H216a12 12 0 0 0 0-24Zm-48 24a12 12 0 1 1 12-12 12 12 0 0 1-12 12Z" />
  </Svg>
);
const Memo = memo(SvgSlidersHorizontalBold);
export default Memo;
