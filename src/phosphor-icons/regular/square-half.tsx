import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareHalf = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 40H56a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-64 80h64v16h-64Zm0-16V88h64v16Zm0 48h64v16h-64Zm64-80h-64V56h64ZM56 56h64v144H56Zm144 144h-64v-16h64v16Z" />
  </Svg>
);
const Memo = memo(SvgSquareHalf);
export default Memo;
