import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingBagOpenFill = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16Zm-88 120a48.05 48.05 0 0 1-48-48 8 8 0 0 1 16 0 32 32 0 0 0 64 0 8 8 0 0 1 16 0 48.05 48.05 0 0 1-48 48ZM40 72V56h176v16Z" />
  </Svg>
);
const Memo = memo(SvgShoppingBagOpenFill);
export default Memo;
