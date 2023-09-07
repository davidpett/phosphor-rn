import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgSquareHalfBottomBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M200 36H56a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20Zm-4 24v56H60V60Zm-80 80v56h-16v-56Zm24 0h16v56h-16Zm-80 0h16v56H60Zm120 56v-56h16v56Z" />
  </Svg>
);
const Memo = memo(SvgSquareHalfBottomBold);
export default Memo;
