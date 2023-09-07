import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIdentificationBadgeThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M146.7 166.75a36 36 0 1 0-37.4 0 63.61 63.61 0 0 0-32.5 22.85 4 4 0 0 0 6.4 4.8 56 56 0 0 1 89.6 0 4 4 0 0 0 6.4-4.8 63.65 63.65 0 0 0-32.5-22.85ZM100 136a28 28 0 1 1 28 28 28 28 0 0 1-28-28ZM200 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V40a12 12 0 0 0-12-12Zm4 188a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h144a4 4 0 0 1 4 4ZM92 64a4 4 0 0 1 4-4h64a4 4 0 0 1 0 8H96a4 4 0 0 1-4-4Z" />
  </Svg>
);
const Memo = memo(SvgIdentificationBadgeThin);
export default Memo;
