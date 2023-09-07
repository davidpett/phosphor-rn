import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgPaintRollerFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M248 104v50a16.07 16.07 0 0 1-11.6 15.38L136 198v34a8 8 0 0 1-16 0v-34a16.07 16.07 0 0 1 11.6-15.38L232 154v-50h-16v24a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-24H16a8 8 0 0 1 0-16h16V64a16 16 0 0 1 16-16h152a16 16 0 0 1 16 16v24h16a16 16 0 0 1 16 16Z" />
  </Svg>
);
const Memo = memo(SvgPaintRollerFill);
export default Memo;
