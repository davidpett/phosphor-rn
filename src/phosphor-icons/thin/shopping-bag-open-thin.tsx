import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgShoppingBagOpenThin = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12ZM40 52h176a4 4 0 0 1 4 4v20H36V56a4 4 0 0 1 4-4Zm176 152H40a4 4 0 0 1-4-4V84h184v116a4 4 0 0 1-4 4Zm-44-92a44 44 0 0 1-88 0 4 4 0 0 1 8 0 36 36 0 0 0 72 0 4 4 0 0 1 8 0Z" />
  </Svg>
);
const Memo = memo(SvgShoppingBagOpenThin);
export default Memo;
