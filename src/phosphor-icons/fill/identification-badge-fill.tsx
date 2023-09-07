import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgIdentificationBadgeFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16ZM96 48h64a8 8 0 0 1 0 16H96a8 8 0 0 1 0-16Zm84.81 150.4a8 8 0 0 1-11.21-1.6 52 52 0 0 0-83.2 0 8 8 0 1 1-12.8-9.6 67.88 67.88 0 0 1 27.4-21.69 40 40 0 1 1 53.94 0 67.88 67.88 0 0 1 27.46 21.69 8 8 0 0 1-1.59 11.2ZM152 136a24 24 0 1 1-24-24 24 24 0 0 1 24 24Z" />
  </Svg>
);
const Memo = memo(SvgIdentificationBadgeFill);
export default Memo;
