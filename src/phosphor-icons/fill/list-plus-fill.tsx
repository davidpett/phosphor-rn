import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgListPlusFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M32 72V56a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8v16a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8Zm8 72h176a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8Zm112 32H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm80 8h-16v-16a8 8 0 0 0-16 0v16h-16a8 8 0 0 0 0 16h16v16a8 8 0 0 0 16 0v-16h16a8 8 0 0 0 0-16Z" />
  </Svg>
);
const Memo = memo(SvgListPlusFill);
export default Memo;
