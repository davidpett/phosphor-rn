import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { memo } from 'react';
const SvgMouseLight = (props: SvgProps) => (
  <Svg
    fill="black"
    viewBox="0 0 256 256"
    width={24}
    height={24}
    accessibilityRole="image"
    {...props}
  >
    <Path d="M144 18h-32a62.07 62.07 0 0 0-62 62v96a62.07 62.07 0 0 0 62 62h32a62.07 62.07 0 0 0 62-62V80a62.07 62.07 0 0 0-62-62Zm50 62v26h-60V30h10a50.06 50.06 0 0 1 50 50Zm-82-50h10v76H62V80a50.06 50.06 0 0 1 50-50Zm32 196h-32a50.06 50.06 0 0 1-50-50v-58h132v58a50.06 50.06 0 0 1-50 50Z" />
  </Svg>
);
const Memo = memo(SvgMouseLight);
export default Memo;
