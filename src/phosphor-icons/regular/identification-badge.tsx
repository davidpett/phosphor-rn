import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIdentificationBadge = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M75.19 198.4a8 8 0 0 0 11.21-1.6 52 52 0 0 1 83.2 0 8 8 0 1 0 12.8-9.6 67.88 67.88 0 0 0-27.4-21.69 40 40 0 1 0-53.94 0A67.88 67.88 0 0 0 73.6 187.2a8 8 0 0 0 1.59 11.2ZM128 112a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm72-88H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm0 192H56V40h144ZM88 64a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8Z" />
  </Svg>
);
const Memo = memo(SvgIdentificationBadge);
export default Memo;
