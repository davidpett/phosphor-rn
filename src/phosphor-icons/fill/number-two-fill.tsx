import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgNumberTwoFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16Zm-40 152a8 8 0 0 1 0 16H96a8 8 0 0 1-5.79-13.52L145.9 120a24 24 0 0 0-35.73-32 23.33 23.33 0 0 0-3.17 4.38 8 8 0 0 1-14-7.77 40.22 40.22 0 0 1 5.28-7.38 40 40 0 0 1 59.45 53.54l-.16.16L114.66 176Z" />
  </Svg>
);
const Memo = memo(SvgNumberTwoFill);
export default Memo;