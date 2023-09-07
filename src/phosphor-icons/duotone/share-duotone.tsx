import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShareDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m224 104-48 48V56Z" opacity={0.2} />
    <Path d="m229.66 98.34-48-48A8 8 0 0 0 168 56v40h-3a103.94 103.94 0 0 0-100.75 78 8 8 0 0 0 15.5 4A88 88 0 0 1 165 112h3v40a8 8 0 0 0 13.66 5.66l48-48a8 8 0 0 0 0-11.32ZM184 132.69V75.31L212.69 104ZM200 216a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V88a8 8 0 0 1 16 0v120h152a8 8 0 0 1 8 8Z" />
  </Svg>
);
const Memo = memo(SvgShareDuotone);
export default Memo;
