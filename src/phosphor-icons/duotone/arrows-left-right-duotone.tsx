import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgArrowsLeftRightDuotone = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="m208 176-32 32v-64ZM80 112V48L48 80Z" opacity={0.2} />
    <Path d="m213.66 170.34-32-32A8 8 0 0 0 168 144v24H48a8 8 0 0 0 0 16h120v24a8 8 0 0 0 13.66 5.66l32-32a8 8 0 0 0 0-11.32ZM184 188.69v-25.38L196.69 176Zm-109.66-71A8 8 0 0 0 88 112V88h120a8 8 0 0 0 0-16H88V48a8 8 0 0 0-13.66-5.66l-32 32a8 8 0 0 0 0 11.32ZM72 67.31v25.38L59.31 80Z" />
  </Svg>
);
const Memo = memo(SvgArrowsLeftRightDuotone);
export default Memo;
