import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingBagBold = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20Zm-4 160H44V60h168ZM76 88a12 12 0 0 1 24 0 28 28 0 0 0 56 0 12 12 0 0 1 24 0 52 52 0 0 1-104 0Z" />
  </Svg>
);
const Memo = memo(SvgShoppingBagBold);
export default Memo;
