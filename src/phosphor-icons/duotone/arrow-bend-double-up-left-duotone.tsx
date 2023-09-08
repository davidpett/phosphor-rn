import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowBendDoubleUpLeftDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M128 56v96l-48-48Z" opacity={0.2} />
    <Path d="M85.66 146.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L43.31 104ZM232 200a8 8 0 0 1-16 0 88.11 88.11 0 0 0-80-87.63V152a8 8 0 0 1-13.66 5.66l-48-48a8 8 0 0 1 0-11.32l48-48A8 8 0 0 1 136 56v40.3A104.15 104.15 0 0 1 232 200ZM120 75.31 91.31 104 120 132.69Z" />
  </Svg>
);
const Memo = memo(SvgArrowBendDoubleUpLeftDuotone);
export default Memo;
