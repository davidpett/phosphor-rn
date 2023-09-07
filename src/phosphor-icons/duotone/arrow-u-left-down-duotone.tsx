import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowULeftDownDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m136 176-48 48-48-48Z" opacity={0.2} />
    <Path d="M144 24a64.07 64.07 0 0 0-64 64v80H40a8 8 0 0 0-5.66 13.66l48 48a8 8 0 0 0 11.32 0l48-48A8 8 0 0 0 136 168H96V88a48 48 0 0 1 96 0v88a8 8 0 0 0 16 0V88a64.07 64.07 0 0 0-64-64ZM88 212.69 59.31 184h57.38Z" />
  </Svg>
);
const Memo = memo(SvgArrowULeftDownDuotone);
export default Memo;
