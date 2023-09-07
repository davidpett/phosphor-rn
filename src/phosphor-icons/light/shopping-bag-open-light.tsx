import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingBagOpenLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 42H40a14 14 0 0 0-14 14v144a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V56a14 14 0 0 0-14-14ZM40 54h176a2 2 0 0 1 2 2v18H38V56a2 2 0 0 1 2-2Zm176 148H40a2 2 0 0 1-2-2V86h180v114a2 2 0 0 1-2 2Zm-42-90a46 46 0 0 1-92 0 6 6 0 0 1 12 0 34 34 0 0 0 68 0 6 6 0 0 1 12 0Z" />
  </Svg>
);
const Memo = memo(SvgShoppingBagOpenLight);
export default Memo;
