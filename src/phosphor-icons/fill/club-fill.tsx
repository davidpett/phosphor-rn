import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgClubFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M240 144a56 56 0 0 1-84.81 48h-4.44l8.91 29.7A8 8 0 0 1 152 232h-48a8 8 0 0 1-7.66-10.3l8.91-29.7h-4.44A56 56 0 1 1 72 88h2.33a56 56 0 1 1 107.34 0H184a56.06 56.06 0 0 1 56 56Z" />
  </Svg>
);
const Memo = memo(SvgClubFill);
export default Memo;
